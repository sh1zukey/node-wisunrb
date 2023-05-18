'use strict';
const mWisunrb = require('../lib/wisunrb.js');
const wisunrb = new mWisunrb({
    path: 'COM6',
    //path: 'COM7',
    id: '000000990215000000000000010FE557',
    password: '8BG4FXS9G9XV'
});

(async () => {
    wisunrb.on('serial-state', (event) => {
        console.log(event);
        console.log(wisunrb.state);
    });

    wisunrb.on('serial-data', (buf) => {
        console.log(buf.toString('utf8'));
    });

    await wisunrb.connect();

    //const res = await wisunrb.getReverseDirectionCumulativeElectricEnergyLog1();
    //const res = await wisunrb.getReverseDirectionCumulativeElectricEnergyLog1({ day: 0 });
    const res = await wisunrb.getReverseDirectionCumulativeElectricEnergyLog1({ day: 1 });
    console.log(JSON.stringify(res, null, '  '));

    /*
    console.log('- 積算電力量計測値履歴1 (逆方向計測値): ' + res.day + ' 日前');
    for(const energy of res.electricEnergy) {
        console.log('  - ' + energy + ' kWh');
    }
    */

    await wisunrb.disconnect();
})();