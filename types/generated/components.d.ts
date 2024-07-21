import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementsPricingCards extends Schema.Component {
  collectionName: 'components_elements_pricing_cards';
  info: {
    displayName: 'PricingCards';
    description: '';
  };
  attributes: {
    planType: Attribute.String;
    planPrice: Attribute.String;
    isFeatured: Attribute.Boolean & Attribute.DefaultTo<false>;
    services: Attribute.Relation<
      'elements.pricing-cards',
      'oneToMany',
      'api::service.service'
    >;
    link: Attribute.Component<'elements.button-link'>;
  };
}

export interface ElementsInput extends Schema.Component {
  collectionName: 'components_elements_inputs';
  info: {
    displayName: 'input';
  };
  attributes: {
    placeholder: Attribute.String;
    Label: Attribute.String;
    inputType: Attribute.String;
  };
}

export interface ElementsForm extends Schema.Component {
  collectionName: 'components_elements_forms';
  info: {
    displayName: 'form';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.Text;
    inputs: Attribute.Component<'elements.input', true>;
    CTA: Attribute.Component<'elements.button-link'>;
  };
}

export interface ElementsCard extends Schema.Component {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    cardImage: Attribute.Media<'images'>;
    heading: Attribute.String;
    description: Attribute.Text;
  };
}

export interface ElementsButtonLink extends Schema.Component {
  collectionName: 'components_elements_button_links';
  info: {
    displayName: 'buttonLink';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    enum: Attribute.Enumeration<['primary', 'secondary']>;
  };
}

export interface SeoMetadata extends Schema.Component {
  collectionName: 'components_seo_metadata';
  info: {
    displayName: 'metadata';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    metaImage: Attribute.Media<'images'>;
  };
}

export interface BlocksRow extends Schema.Component {
  collectionName: 'components_blocks_rows';
  info: {
    displayName: 'Row';
  };
  attributes: {
    card: Attribute.Component<'elements.card', true>;
  };
}

export interface BlocksPricing extends Schema.Component {
  collectionName: 'components_blocks_pricings';
  info: {
    displayName: 'pricing';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.String;
    plan: Attribute.Component<'elements.pricing-cards', true>;
  };
}

export interface BlocksHero extends Schema.Component {
  collectionName: 'components_hero_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    Title: Attribute.Text;
    HeroImage: Attribute.Media<'images'>;
    link: Attribute.Component<'elements.button-link'>;
    DescriptionText: Attribute.Text;
  };
}

export interface BlocksCta extends Schema.Component {
  collectionName: 'components_blocks_ctas';
  info: {
    displayName: 'Cta';
  };
  attributes: {
    headings: Attribute.String;
    Description: Attribute.Text;
    Form: Attribute.Component<'elements.form'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'elements.pricing-cards': ElementsPricingCards;
      'elements.input': ElementsInput;
      'elements.form': ElementsForm;
      'elements.card': ElementsCard;
      'elements.button-link': ElementsButtonLink;
      'seo.metadata': SeoMetadata;
      'blocks.row': BlocksRow;
      'blocks.pricing': BlocksPricing;
      'blocks.hero': BlocksHero;
      'blocks.cta': BlocksCta;
    }
  }
}
