import App from './App';

it('renders without crashing', () => {
  const component = render( <App /> )
  expect(component).toMatchSnapshot()
});
