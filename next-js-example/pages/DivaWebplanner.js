import Diva from '@crystaldesign/diva-core'
import WebPlanner from '@crystaldesign/diva-web-planner-react'

//this parameters are mandatory and will be provided to you
const ORGANIZATION_ID = 'your-organization-id'
const CHANNEL_ID = 'your-channel-id'
const INIT_PARAMS = {}

//this parameters are optional, most of the time they are not needed, otherwise we will provide them to you
const CONFIG_URL = 'your-config-url'
const IDENTIFIER = 'your-identifier'

export default function DivaWebPlanner() {
    return <Diva
    organizationId={ORGANIZATION_ID}
    channelId={CHANNEL_ID}
    configUrl={CONFIG_URL}
    identifier={IDENTIFIER}
    currentComponent={{
      type: 'DIVA_WEBPLANNER',
      parameters: INIT_PARAMS,
    }}
    components={[WebPlanner]}
    onEvent={(event) => {
      //there are other events available, but most of the time this is the one needed by you
      if ((event.type = 'onAddToBasket')) {
        console.log(event.data);
      }
    }}
  />
}