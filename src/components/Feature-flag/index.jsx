import { useContext } from "react"
import TicTacToe from "../Project_15_TicTakToe"
import Accordian from "../Project_2_Accordian"
import RandomColor from "../Project_3_RandomColor"
import LightDarkMode from "../Project_9_LightDarkMode"
import QRCodeGenerator from "../Project_8_QRGenerator"
import FeatureFlagGlobalState, { FeatureFlagsContext } from "./context"

export default function FeatureFlags() {

    const { loading, enabledFlags } = useContext(FeatureFlagsContext);
    const componentToRender = [
        {
            key: 'showLightDarkMode',
            component: <LightDarkMode />
        },
        {
            key: 'showTicTacToeBoard',
            component: <TicTacToe />
        },
        {
            key: 'showRabdomColorgenerator',
            component: <RandomColor />,
        },
        {
            key: 'showAccordian',
            component: <Accordian />
        },
        {
            key: 'showQrCodeGenerator',
            component: <QRCodeGenerator />
        }
    ]

    function checkEnabledFlags(getCurrentKey) {
        return enabledFlags[getCurrentKey];
    }

    if (loading) {
        return <h1>Loading Data ! Please Wait </h1>
    }
    return (

        <div>
            <h1>Feature Flags</h1>
            {
                componentToRender.map(componentItem => checkEnabledFlags(componentItem.key)
                    ? componentItem.component
                    : null)
            }
        </div>
    );
}