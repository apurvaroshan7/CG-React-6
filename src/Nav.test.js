import { shallow } from 'enzyme';
import Nav from './Nav'


const setUp = (props={}) => {
  const component = shallow(<Nav {...props}/>)
  return component;
}
describe('Nav Test', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  })
  it('should render nav without errors', () => {
    const wrapper = component.find('nav');
    expect(wrapper.length).toBe(1);
  });
  it('should render ul without errors', () => {
    const wrapper = component.find('.nav-links');
    expect(wrapper.length).toBe(1);
  });
  it('should render li without errors', () => {
    const wrapper = component.find('li');
    expect(wrapper.length).toBe(4);
  });
  it('should render NavLink without errors', () => {
    const wrapper = component.find('NavLink');
    expect(wrapper.length).toBe(4);
  });
})
