import MyMath from './math.mjs';

const testDatas = [
    [
        [],
        0
    ],
    [
        [1],
        1
    ],
    [
        [1, 0],
        1
    ],
    [
        [1, 2, 3, 4],
        10
    ],
    [
        ['1', '2', '3', '4'],
        10
    ],
    [
        ['1asd', '2qwe', '3cxv', '4ewrwe'],
        10
    ],
    [
        ['asd1', 'qwe2', 'cxv3', 'ewrwe4'],
        10
    ],
    [
        ['as1d', 'qw2e', 'cx3v', 'ewr4we'],
        10
    ],
    [
        ['10asd', '20qwe', '30cxv', '40ewrwe'],
        100
    ],
    [
        ['asd10', 'qwe20', 'cxv30', 'ewrwe40'],
        100
    ],
    [
        ['as10d', 'qw20e', 'cx30v', 'ewr40we'],
        100
    ],
    [
        ['10asd20', '20qwe30', '30cxv40', '40ewrwe50'],
        100
    ],
    [
        ['a20sd10', 'q30we20', 'c40xv30', 'ewr50we40'],
        140
    ],
    [
        ['20as10d', '30qw20e', '40cx30v', '50ewr40we'],
        140
    ],
    [
        ['1.1', '2.2', '3.3', '4.4'],
        11
    ],
    [
        ['1.1asd', '2.2qwe', '3.3cxv', '4.4ewrwe'],
        11
    ],
    [
        ['asd1.1', 'qwe2.2', 'cxv3.3', 'ewrwe4.4'],
        11
    ],
    [
        ['as1.1d', 'qw2.2e', 'cx3.3v', 'ewr4.4we'],
        11
    ],
    [
        ['.1.1', '.2.2', '.3.3', '.4.4'],
        11
    ],
    [
        ['a', 'b', 'c', 'd'],
        NaN
    ],
    [
        ['-1', '-2', '-3', '-4'],
        -10
    ],
    [
        ['.-1.1', '.-2.2', '.-3.3', '.-4.4'],
        -11
    ],
    [
        ['-1.1asd', '-2.2qwe', '-3.3cxv', '-4.4ewrwe'],
        -11
    ],
    [
        ['asd-1.1', 'qwe-2.2', 'cxv-3.3', 'ewrwe-4.4'],
        -11
    ],
    [
        ['as-1.1d', 'qw-2.2e', 'cx-3.3v', 'ewr-4.4we'],
        -11
    ]
];

for (const testData of testDatas) {
    const sum = MyMath.sum(...testData[0]);

    const resultOfCompare = Number.isNaN(testData[1]) ? Number.isNaN(sum) : sum === testData[1];

    console.log(`Sum of ${testData[0]} is:`, sum, resultOfCompare);
}