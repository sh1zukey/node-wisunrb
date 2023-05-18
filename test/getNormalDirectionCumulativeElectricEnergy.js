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

    const energy = await wisunrb.getNormalDirectionCumulativeElectricEnergy();
    console.log('- 積算電力量計測値 (正方向計測値): ' + energy + ' kWh');

    const digits = await wisunrb.getNumberOfEffectiveDigitsCumulativeElectricEnergy();
    console.log('- 積算電力量有効桁数: ' + digits + ' 桁');

    await wisunrb.disconnect();
})();