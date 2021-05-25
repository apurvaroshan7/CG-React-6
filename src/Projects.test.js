import { shallow } from 'enzyme';
import Projects from './Projects'


const setUp = (props={}) => {
  const component = shallow(<Projects {...props}/>)
  return component;
}
describe('Projects Test', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  })
  it('should render div without errors', () => {
    const wrapper = component.find('div');
    expect(wrapper.length).toBe(1);
  });
  it('should render h1 without errors', () => {
    const wrapper = component.find('h1');
    expect(wrapper.length).toBe(1);
  });
})
