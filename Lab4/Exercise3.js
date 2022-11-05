class Info {
    logging(msg) {
        console.info(msg);
    }
}

class Warn {
    logging(msg) {
        console.warn(msg);
    }
}

class Error {
    logging(msg) {
        console.error(msg);
    }
}

class Table {
    logging(msg) {
        console.table(msg);
    }
}

class Strategy {
    setStrategy(type) {
        this.strategyMethod = type;
    }
    logging(msg) {
        this.strategyMethod.logging(msg);
    }
}

const strategy = new Strategy();

strategy.setStrategy(new Info());
strategy.logging('info....');

strategy.setStrategy(new Warn());
strategy.logging('warn....');

strategy.setStrategy(new Error());
strategy.logging('error....');

strategy.setStrategy(new Table());
strategy.logging(['table', 'table']);