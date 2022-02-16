"use strict";
// Copyright IBM Corp. 2020. All Rights Reserved.
// Node module: @loopback/typeorm
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@loopback/core");
const testlab_1 = require("@loopback/testlab");
const __1 = require("../../");
describe('TypeOrmMixin unit tests', () => {
    class AppUsingTypeOrm extends (0, __1.TypeOrmMixin)(core_1.Application) {
    }
    let app;
    beforeEach(getApp);
    it('adds essential members', async () => {
        (0, testlab_1.expect)(app).to.have.property('connectionManager');
        (0, testlab_1.expect)(app).to.have.property('connection');
        (0, testlab_1.expect)(app).to.have.property('migrateSchema');
    });
    async function getApp() {
        app = new AppUsingTypeOrm();
    }
});
//# sourceMappingURL=mixin.unit.js.map