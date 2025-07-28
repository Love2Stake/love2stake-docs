# Disclaimer Templates

This directory contains predefined disclaimer templates that use the "information" type styling. These templates provide consistent, reusable disclaimers across the site.

## Available Templates

### EducationalDisclaimer (Default)
General educational disclaimer for financial/crypto content.

```jsx
import { EducationalDisclaimer } from '@site/src/components/DisclaimerTemplates';

<EducationalDisclaimer />
```

### StakePoolDisclaimer
Specific disclaimer for Cardano stake pool content.

```jsx
import { StakePoolDisclaimer } from '@site/src/components/DisclaimerTemplates';

<StakePoolDisclaimer />
```

### TechnicalGuideDisclaimer
For technical guides and documentation.

```jsx
import { TechnicalGuideDisclaimer } from '@site/src/components/DisclaimerTemplates';

<TechnicalGuideDisclaimer />
```

### SoftwareDisclaimer
For software, scripts, and automation content.

```jsx
import { SoftwareDisclaimer } from '@site/src/components/DisclaimerTemplates';

<SoftwareDisclaimer />
```

### LiabilityDisclaimer
General liability disclaimer.

```jsx
import { LiabilityDisclaimer } from '@site/src/components/DisclaimerTemplates';

<LiabilityDisclaimer />
```

### ResearchDisclaimer
For investment-related content (DYOR).

```jsx
import { ResearchDisclaimer } from '@site/src/components/DisclaimerTemplates';

<ResearchDisclaimer />
```

### CommunityDisclaimer
For community-contributed content.

```jsx
import { CommunityDisclaimer } from '@site/src/components/DisclaimerTemplates';

<CommunityDisclaimer />
```

## Import Options

### Import All Templates at Once
```jsx
import { DisclaimerTemplates } from '@site/src/components/DisclaimerTemplates';

// Use any template
<DisclaimerTemplates.Educational />
<DisclaimerTemplates.StakePool />
<DisclaimerTemplates.TechnicalGuide />
<DisclaimerTemplates.Software />
<DisclaimerTemplates.Liability />
<DisclaimerTemplates.Research />
<DisclaimerTemplates.Community />
```

### Import Specific Templates
```jsx
import { 
  EducationalDisclaimer,
  StakePoolDisclaimer,
  TechnicalGuideDisclaimer 
} from '@site/src/components/DisclaimerTemplates';

<EducationalDisclaimer />
<StakePoolDisclaimer />
<TechnicalGuideDisclaimer />
```

### Import Everything (All + Individual)
```jsx
import { 
  DisclaimerTemplates,
  EducationalDisclaimer,
  StakePoolDisclaimer 
} from '@site/src/components/DisclaimerTemplates';

// Use either way
<DisclaimerTemplates.Educational />
<EducationalDisclaimer />
```

## Usage Examples

### Single Template
```jsx
import { StakePoolDisclaimer } from '@site/src/components/DisclaimerTemplates';

# My Stake Pool Guide

<StakePoolDisclaimer />

Your content here...
```

### Multiple Templates
```jsx
import { 
  TechnicalGuideDisclaimer, 
  SoftwareDisclaimer 
} from '@site/src/components/DisclaimerTemplates';

# Technical Setup Guide

<TechnicalGuideDisclaimer />
<SoftwareDisclaimer />

Your technical content here...
```

### Default Import
```jsx
import DisclaimerTemplate from '@site/src/components/DisclaimerTemplates';

# General Content

<DisclaimerTemplate />

Your content here...
```

## Customization

If you need a custom disclaimer, you can still use the base Disclaimer component:

```jsx
import Disclaimer from '@site/src/components/Disclaimer';

<Disclaimer type="information">
Your custom disclaimer content here
</Disclaimer>
```

## All Templates Use "Information" Type

All templates use the "information" type styling, which provides:
- ℹ️ Information icon
- Grey color scheme (light/dark theme compatible)
- Professional, informative appearance
- Consistent styling across all disclaimer templates