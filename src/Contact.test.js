import { shallow } from 'enzyme';
import Contact from './Contact'


const setUp = (props={}) => {
  const component = shallow(<Contact {...props}/>)
  return component;
}
describe('Contact Test', () => {
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
