import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditPropertiesComponent } from './dialog-edit-properties.component';

describe('DialogEditPropertiesComponent', () => {
  let component: DialogEditPropertiesComponent;
  let fixture: ComponentFixture<DialogEditPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditPropertiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
