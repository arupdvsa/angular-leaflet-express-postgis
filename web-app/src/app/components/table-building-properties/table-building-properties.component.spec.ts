import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBuildingPropertiesComponent } from './table-building-properties.component';

describe('TableBuildingPropertiesComponent', () => {
  let component: TableBuildingPropertiesComponent;
  let fixture: ComponentFixture<TableBuildingPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableBuildingPropertiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableBuildingPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
