import keys from './../constants/keys';
import devices from './devices';

const handlers = [
    devices
].reduce((output, handler) => Object.assign(output, handler), {});

const DEFAULT_STATE = {
    rokus: [],
    keys: keys
};

export default (state = DEFAULT_STATE, action = {}) => {
    const { type, payload } = action;
    return handlers[type] ? handlers[type](state, payload) : state;
}

export { getRokuDevices } from './devices';
