import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFeetComponent } from './user-feet.component';

describe('UserFeetComponent', () => {
  let component: UserFeetComponent;
  let fixture: ComponentFixture<UserFeetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserFeetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserFeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
