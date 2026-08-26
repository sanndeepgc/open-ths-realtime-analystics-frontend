import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopicList } from './topic-list';

describe('TopicList', () => {
  let component: TopicList;
  let fixture: ComponentFixture<TopicList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopicList],
    }).compileComponents();

    fixture = TestBed.createComponent(TopicList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
