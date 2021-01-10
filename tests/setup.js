import 'react';
import 'react-native';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'enzyme-to-json';


Enzyme.configure({adapter: new Adapter()});
expect.addSnapshotSerializer( createSerializer({ mode: 'deep' }) );
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
//jest.mock('NativeAnimatedHelp');