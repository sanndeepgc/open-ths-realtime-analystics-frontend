import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsumerList } from './consumer-list';

describe('ConsumerList', () => {
  let component: ConsumerList;
  let fixture: ComponentFixture<ConsumerList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsumerList],
    }).compileComponents();

    fixture = TestBed.createComponent(ConsumerList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
