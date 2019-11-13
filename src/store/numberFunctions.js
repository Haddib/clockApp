import * as actions from './actionTypes';

const setRows = digit => {
    switch (digit) {
        case 0: return setZero();
        case 1: return setOne();
        case 2: return setTwo();
        case 3: return setThree();
        case 4: return setFour();
        case 5: return setFive();
        case 6: return setSix();
        case 7: return setSeven();
        case 8: return setEight();
        case 9: return setNine();
        default:
            break;
    }
}

const setZero = () => {
    return {
        TopRow: NW_HH_HH_NE(), 
        SecondRow: VV_NW_NE_VV(),
        ThirdRow: VV_VV_VV_VV(),
        FourtRow: VV_VV_VV_VV(),
        FifthRow: VV_SW_SE_VV(),
        BottomRow: SW_HH_HH_SE()
    };
}

const setOne = () => {
    return {
        TopRow: NW_HH_NE_nn(), 
        SecondRow: SW_NE_VV_nn(),
        ThirdRow: nn_VV_VV_nn(),
        FourtRow: nn_VV_VV_nn(),
        FifthRow: NW_SE_SW_NW(),
        BottomRow: SW_HH_HH_SE()
    };
}

const setTwo = () => {
    return {
        TopRow: NW_HH_HH_NE(), 
        SecondRow: SW_HH_NE_VV(),
        ThirdRow: NW_HH_SE_VV(),
        FourtRow: VV_NW_HH_SE(),
        FifthRow: VV_SW_HH_NE(),
        BottomRow: SW_HH_HH_SE()
    };
}

const setThree = () => {
    return {
        TopRow: NW_HH_HH_NE(), 
        SecondRow: SW_HH_NE_VV(),
        ThirdRow: NW_HH_SE_VV(),
        FourtRow: SW_HH_NE_VV(),
        FifthRow: NW_HH_SE_VV(),
        BottomRow: SW_HH_HH_SE()
    };
}

const setFour = () => {
    return {
        TopRow: NW_NE_NW_NE(), 
        SecondRow: VV_VV_VV_VV(),
        ThirdRow: VV_SW_SE_VV(),
        FourtRow: SW_HH_NE_VV(),
        FifthRow: nn_nn_VV_VV(),
        BottomRow: nn_nn_SW_SE()
    };
}

const setFive = () => {
    return {
        TopRow: NW_HH_HH_NE(), 
        SecondRow: VV_NW_HH_SE(),
        ThirdRow: VV_SW_HH_NE(),
        FourtRow: SW_HH_NE_VV(),
        FifthRow: NW_HH_SE_VV(),
        BottomRow: SW_HH_HH_SE()
    };
}

const setSix = () => {
    return {
        TopRow: NW_HH_HH_NE(), 
        SecondRow: VV_NW_HH_SE(),
        ThirdRow: VV_SW_HH_NE(),
        FourtRow: VV_NW_NE_VV(),
        FifthRow: VV_SW_SE_VV(),
        BottomRow: SW_HH_HH_SE()
    };
}

const setSeven = () => {
    return {
        TopRow: NW_HH_HH_NE(), 
        SecondRow: SW_HH_NE_VV(),
        ThirdRow: nn_nn_VV_VV(),
        FourtRow: nn_nn_VV_VV(),
        FifthRow: nn_nn_VV_VV(),
        BottomRow: nn_nn_SW_SE()
    };
}

const setEight = () => {
    return {
        TopRow: NW_HH_HH_NE(), 
        SecondRow: VV_NW_NE_VV(),
        ThirdRow: VV_SW_SE_VV(),
        FourtRow: VV_NW_NE_VV(),
        FifthRow: VV_SW_SE_VV(),
        BottomRow: SW_HH_HH_SE()
    };
}

const setNine = () => {
    return {
        TopRow: NW_HH_HH_NE(), 
        SecondRow: VV_NW_NE_VV(),
        ThirdRow: VV_SW_SE_VV(),
        FourtRow: SW_HH_NE_VV(),
        FifthRow: NW_HH_SE_VV(),
        BottomRow: SW_HH_HH_SE()
    };
}

const NW_HH_HH_NE = () => {
    return {
        first: actions.NW_CORNER,
        second: actions.HORIZONTAL_LINE,
        third: actions.HORIZONTAL_LINE,
        fourth: actions.NE_CORNER
    };
}

const NW_NE_NW_NE = () => {
    return {
        first: actions.NW_CORNER,
        second: actions.NE_CORNER,
        third: actions.NW_CORNER,
        fourth: actions.NE_CORNER
    };
}

const VV_NW_NE_VV = () => {
    return {
        first: actions.VERTICAL_LINE,
        second: actions.NW_CORNER,
        third: actions.NE_CORNER,
        fourth: actions.VERTICAL_LINE
    }
}

const VV_VV_VV_VV = () => {
    return {
        first: actions.VERTICAL_LINE,
        second: actions.VERTICAL_LINE,
        third: actions.VERTICAL_LINE,
        fourth: actions.VERTICAL_LINE
    }
}

const VV_SW_SE_VV = () => {
    return {
        first: actions.VERTICAL_LINE,
        second: actions.SW_CORNER,
        third: actions.SE_CORNER,
        fourth: actions.VERTICAL_LINE
    }
}

const SW_HH_HH_SE = () => {
    return {
        first: actions.SW_CORNER,
        second: actions.HORIZONTAL_LINE,
        third: actions.HORIZONTAL_LINE,
        fourth: actions.SE_CORNER
    }
}

const NW_HH_NE_nn = () => {
    return {
        first: actions.NW_CORNER,
        second: actions.HORIZONTAL_LINE,
        third: actions.NE_CORNER,
        fourth: actions.DEF
    }
}

const nn_VV_VV_nn = () => {
    return {
        first: actions.DEF,
        second: actions.VERTICAL_LINE,
        third: actions.VERTICAL_LINE,
        fourth: actions.DEF
    }
}

const NW_SE_SW_NW = () => {
    return {
        first: actions.NW_CORNER,
        second: actions.SE_CORNER,
        third: actions.SW_CORNER,
        fourth: actions.NE_CORNER
    }
}

const SW_NE_VV_nn = () => {
    return {
        first: actions.SW_CORNER,
        second: actions.NE_CORNER,
        third: actions.VERTICAL_LINE,
        fourth: actions.DEF
    }
}

const SW_HH_NE_VV = () => {
    return {
        first: actions.SW_CORNER,
        second: actions.HORIZONTAL_LINE,
        third: actions.NE_CORNER,
        fourth: actions.VERTICAL_LINE
    }
}

const VV_NW_HH_SE = () => {
    return {
        first: actions.VERTICAL_LINE,
        second: actions.NW_CORNER,
        third: actions.HORIZONTAL_LINE,
        fourth: actions.SE_CORNER
    }
}

const NW_HH_SE_VV = () => {
    return {
        first: actions.NW_CORNER,
        second: actions.HORIZONTAL_LINE,
        third: actions.SE_CORNER,
        fourth: actions.VERTICAL_LINE
    }
}

const VV_SW_HH_NE = () => {
    return {
        first: actions.VERTICAL_LINE,
        second: actions.SW_CORNER,
        third: actions.HORIZONTAL_LINE,
        fourth: actions.NE_CORNER
    }
}

const nn_nn_SW_SE = () => {
    return {
        first: actions.DEF,
        second: actions.DEF,
        third: actions.SW_CORNER,
        fourth: actions.SE_CORNER
    }
}

const nn_nn_VV_VV = () => {
    return {
        first: actions.DEF,
        second: actions.DEF,
        third: actions.VERTICAL_LINE,
        fourth: actions.VERTICAL_LINE
    }
}

export default setRows;