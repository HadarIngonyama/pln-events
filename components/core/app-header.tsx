import { trackGoal } from "fathom-client";
import useAppAnalytics from "../../hooks/use-app-analytics";
import {APP_ANALYTICS_EVENTS} from "../../helpers/constants"

function AppHeader() {
    const analytics = useAppAnalytics();
    const onHostEventClicked = () => {
        analytics.captureEvent(APP_ANALYTICS_EVENTS.SUBMIT_NEW_EVENT, {
            'name': 'submitEventButton'
          });
        trackGoal('CXB9QJA8', 0)
    }
    return <>
        <header className="ah">
            <div className="ah__logo">
                <img className="ah__logo__img" src="/logos/protocol-labs-network-small-logo.svg" />
                <div className="ah__logo__heading">
                    <h1 className="ah__logo__heading__text">Protocol Labs</h1>
                    <h1 className="ah__logo__heading__text">Network Events</h1>
                </div></div>
            <a className="ah__btn" onClick={onHostEventClicked} target="_blank" href="https://github.com/memser-spaceport/pln-events#submitting-events">Submit an event</a>
            {/* <img src="/icons/pln-menu-icon.svg" className="ah__menu"/> */}
        </header>
        <style jsx>
            {
                `
                
            .ah {padding: 0px 24px; z-index: 10; background: white; justify-content: space-between; border-bottom: 1px solid lightgrey; align-items: center; display: flex; width: 100vw; height: 60px; position: fixed; top: 0; left:0; right:0; box-shadow: 0px 1px 4px #E2E8F0; }
            .ah__logo {display: flex; align-items: center;}
            .ah__logo__img {margin:0; padding:0; width: 48px; height: 48px;}
            .ah__logo__heading {display: none;}
            .ah__logo__heading__text {margin:0; padding:0; font-size: 16px;}
            .ah__btn {cursor: pointer; display: block; text-decoration: none;  box-shadow: 0px 1px 1px rgba(7, 8, 8, 0.16), inset 0px 1px 0px rgba(255, 255, 255, 0.16); padding: 8px 24px;background:linear-gradient(90deg, #427DFF 0%, #44D5BB 100%); border-radius: 20px; color: white; outline: none; border: none; font-size: 15px; font-weight: 600;}
            .ah__menu {display: inline; cursor: pointer;}
            @media(min-width: 1200px) {
                .ah__menu {display: none;}
                
                .ah__logo__heading { margin:0; padding:0; line-height: 18px; font-size: 18px; font-weight: 700; display: block; margin-left: 8px;}
            }

            `
            }
        </style>
    </>
}

export default AppHeader