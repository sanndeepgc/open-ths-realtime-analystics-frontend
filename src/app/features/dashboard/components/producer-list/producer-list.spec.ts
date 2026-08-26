import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProducerList } from './producer-list';

describe('ProducerList', () => {
  let component: ProducerList;
  let fixture: ComponentFixture<ProducerList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProducerList],
    }).compileComponents();

    fixture = TestBed.createComponent(ProducerList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
