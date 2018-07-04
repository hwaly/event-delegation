const Singleton = class extends WeakMap {
    has() {
        throw 'invalid';
    }

    get() {
        throw 'invalid';
    }

    set() {
        throw 'invalid';
    }

    getInstance(value) {
        if (!super.has(value.constructor)) {
            super.set(value.constructor, value);
        }

        return super.get(value.constructor);
    }
};