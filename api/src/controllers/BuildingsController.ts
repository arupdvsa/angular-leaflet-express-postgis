import pool from "../dbconfig/dbconnector";

class BuildingsController {
  public async get(req, res) {
    try {
      const client = await pool.connect();

      const sql = `SELECT jsonb_build_object(
                                'type',     'FeatureCollection',
                                'features', jsonb_agg(features.feature)
                                )
                         FROM (
                            SELECT jsonb_build_object(
                              'type',       'Feature',
                              'geometry',   ST_AsGeoJSON(wkb_geometry)::jsonb,
                              'properties', to_jsonb(inputs) - 'ogc_fid' - 'wkb_geometry'
                            ) AS feature
                            FROM (SELECT * FROM buildings) inputs) features`;

      const {rows} = await client.query(sql);
      const buildingsGeo = rows;

      client.release();

      res.send(buildingsGeo);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  public async properties_get(req, res) {
    try {
      const client = await pool.connect();

      const sql = ` SELECT address, city, 
                    country,roof_material, roof_type, 
                    area, storeys, height,  
                    ST_AsGeoJSON(wkb_geometry) as geometry , 
                    ogc_fid as id FROM public.buildings`;

      const {rows} = await client.query(sql);
      const buildinglist = rows;

      client.release();

      res.send(buildinglist);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  public async properties_add_post(req, res) {
    try {
      const id = req.body.id;
      const address = req.body.address;
      const city = req.body.city;
      const country = req.body.country;

      res.send("id:" + id + " address:" + address + " city:" + city + " country:" + country);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  public async properties_update_put(req, res) {
    try {
      const client = await pool.connect();
      var query = `UPDATE buildings SET address = ($1), city = ($2), 
       country = ($3), roof_material = ($4), roof_type = ($5), area = ($6),
       storeys = ($7), height = ($8)
       WHERE ogc_fid=($9)`;

      const {rows} = await client.query(query, [
        req.body.address,
        req.body.city,
        req.body.country,
        req.body.roof_material,
        req.body.roof_type,
        req.body.area,
        req.body.storeys,
        req.body.height,
        req.params.building_id,
      ]);
      const updatedBuildings = rows;
      client.release();
      res.send(updatedBuildings);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  public async properties_delete(req, res) {
    try {
      const client = await pool.connect();
      var query = `DELETE FROM buildings WHERE ogc_fid=($1)`;

      const {rows} = await client.query(query, [req.params.building_id]);
      const deletedBuildings = rows;
      client.release();
      res.send(deletedBuildings);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  private updateBuildingPropertiesByID(id, cols) {
    // Setup static beginning of query
    var query = ["UPDATE buildings"];
    query.push("SET");

    // Create another array storing each set command
    // and assigning a number value for parameterized query
    var set = [];
    Object.keys(cols).forEach(function (key, i) {
      set.push(key + " = ($" + (i + 1) + ")");
    });
    query.push(set.join(", "));

    // Add the WHERE statement to look up by id
    query.push("WHERE ogc_fid = " + id);

    // Return a complete query string
    return query.join(" ");
  }
}

export default BuildingsController;
