--
-- PostgreSQL database dump
--

-- Dumped from database version 12.5 (Ubuntu 12.5-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.5 (Ubuntu 12.5-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: buildings; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.buildings (
    ogc_fid integer NOT NULL,
    wkb_geometry public.geometry,
    geom_id character varying,
    address character varying,
    city character varying,
    country character varying,
    roof_material character varying,
    roof_type character varying,
    area double precision,
    storeys integer,
    height integer
);


ALTER TABLE public.buildings OWNER TO postgres;

--
-- Name: buildings_ogc_fid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.buildings_ogc_fid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.buildings_ogc_fid_seq OWNER TO postgres;

--
-- Name: buildings_ogc_fid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.buildings_ogc_fid_seq OWNED BY public.buildings.ogc_fid;


--
-- Name: buildings ogc_fid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.buildings ALTER COLUMN ogc_fid SET DEFAULT nextval('public.buildings_ogc_fid_seq'::regclass);


--
-- Data for Name: buildings; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.buildings (ogc_fid, wkb_geometry, geom_id, address, city, country, roof_material, roof_type, area, storeys, height) VALUES (1, '010700000002000000010300000001000000050000000200C0A3A17E52C09965F747EC5E4440FFF6BFF8A07E52C0AB264B25EE5E444000EEBFB89E7E52C09965F747EC5E44400000C05A9F7E52C062524778EA5E44400200C0A3A17E52C09965F747EC5E44400101000000651D4D879F7E52C0DD13950DEB5E4440', 'afd6919d-55fa-4c3b-850f-d7b35c00ff71', '517 2 AVE', 'NEW YORK', 'USA', 'Built-up roof or single-ply membrane', 'Flat', 93.58, 4, 14);
INSERT INTO public.buildings (ogc_fid, wkb_geometry, geom_id, address, city, country, roof_material, roof_type, area, storeys, height) VALUES (2, '010700000002000000010300000001000000050000003691335A2B8052C0359725F5426044404A883393288052C0F8AA55184A6044406F7633B9238052C00BEA3250466044405E88334A268052C08019D4E83E6044403691335A2B8052C0359725F54260444001010000001AE0436B258052C0AA2EF60343604440', '30adda76-4810-4771-9769-b3c82b9bbc15', '517 W  29 ST', 'NEW YORK', 'USA', 'Built-up roof or single-ply membrane', 'Flat', 811.28, 15, 51);
INSERT INTO public.buildings (ogc_fid, wkb_geometry, geom_id, address, city, country, roof_material, roof_type, area, storeys, height) VALUES (3, '010700000002000000010300000001000000050000000200C04D977E52C0C16FC7DAAC5F444002E5BF2D967E52C013D951E5AB5F4440FEEDBFBC947E52C0EF0A9E1AB05F4440FFF6BFC1957E52C0B8FA9EB0B05F44400200C04D977E52C0C16FC7DAAC5F4440010100000030629D32967E52C09724404DAD5F4440', '9cf40099-df07-47a5-9586-d8088d06048f', '149 E  36 ST', 'NEW YORK', 'USA', 'Built-up roof or single-ply membrane', 'Flat', 95.38, 4, 14);
INSERT INTO public.buildings (ogc_fid, wkb_geometry, geom_id, address, city, country, roof_material, roof_type, area, storeys, height) VALUES (4, '0107000000020000000103000000010000000500000001E57F61B17E52C0E6C721FC285F4440FC08800DB47E52C0E565E086215F4440FEFF7F57AF7E52C0D6CC6B7A1D5F444001CA7FBDAC7E52C0CD300E78255F444001E57F61B17E52C0E6C721FC285F44400101000000409D8F81B07E52C0190E5075235F4440', '2d6c7bd0-bd49-464a-9681-455a4f41d6fb', '437 3 AVE', 'NEW YORK', 'USA', 'Built-up roof or single-ply membrane', 'Flat', 804.22, 8, 27);
INSERT INTO public.buildings (ogc_fid, wkb_geometry, geom_id, address, city, country, roof_material, roof_type, area, storeys, height) VALUES (5, '0107000000020000000103000000010000000500000082FBBFACCA7F52C029CC7916CA6044408004C0C2C97F52C06BDA3865C96044400009C031C77F52C05176A97AD060444000F7BF51C87F52C04B42EA2BD160444082FBBFACCA7F52C029CC7916CA60444001010000009BF94041C97F52C052C72F17CC604440', '5930dbd4-ea99-4acb-b3f1-9f26605e5dc7', '441 W  37 ST', 'NEW YORK', 'USA', 'Built-up roof or single-ply membrane', 'Flat', 155.72, 2, 9);


--
-- Name: buildings_ogc_fid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.buildings_ogc_fid_seq', 5, true);


--
-- Name: buildings buildings_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.buildings
    ADD CONSTRAINT buildings_pkey PRIMARY KEY (ogc_fid);


--
-- PostgreSQL database dump complete
--

