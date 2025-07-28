import React from 'react';
import Disclaimer from '@site/src/components/Disclaimer';

/**
 * Predefined disclaimer templates using the "information" type styling
 * These can be easily imported and used across the site
 */

// Cardano stake pool specific disclaimer
export function StakePoolDisclaimer() {
  return (
    <Disclaimer type="information">
      If you find this project useful, please consider supporting it by delegating your ADA to the LOVE2 stake pool or by sending a contribution to the following address:
      <br/><br />
      <code style={{
        display: 'block',
        padding: '8px 12px',
        backgroundColor: 'var(--ifm-color-emphasis-100)',
        border: '1px solid var(--ifm-color-emphasis-300)',
        borderRadius: '4px',
        fontFamily: 'monospace',
        fontSize: '14px',
        wordBreak: 'break-all',
        userSelect: 'all',
        cursor: 'text'
      }}>
        addr1qy2jswg2xfca87h79050dzgj0yup69u9gpclwn9jl2g5tlfvaj6kvenchu5gwxlfhffysxsnekq6kh4z7yq758w2x3gq7xc7sn
      </code>
      <br />
      Your support is greatly appreciated and helps sustain ongoing development and improvements.
    </Disclaimer>
  );
}

export function LiabilityDisclaimer() {
  return (
    <Disclaimer type="warning">
      The content, tools, and information provided on this site—including any scripts or automation related to Cardano stake pool operations—are shared for informational and educational purposes only. Nothing presented should be considered as professional, financial, or technical advice, nor should it be interpreted as an endorsement.
      <br /><br />
      All views and opinions expressed are solely those of the author and do not necessarily reflect the views of the author's employer, organization, or any affiliated entity.
      <br /><br />
      All materials are provided "as is," without warranties of any kind—express or implied—including, but not limited to, accuracy, reliability, or suitability for any specific purpose. There is no guarantee of completeness, correctness, or performance.
      <br /><br />
      By using this software or any information provided, you assume full responsibility for any actions you take. The author is not liable for any loss, damage, or consequences resulting from the use of this material.
      <br /><br />
      Always do your own research and due diligence before making decisions or applying any automation to your Cardano stake pool operations.
    </Disclaimer>
  )
}

// Export all templates as a single object for bulk import
export const DisclaimerTemplates = {
  StakePool: StakePoolDisclaimer,
  Liability: LiabilityDisclaimer,
};