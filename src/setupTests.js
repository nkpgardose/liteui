// Because it's actually a dev file.
/* eslint import/no-extraneous-dependencies: 0 */

import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })
