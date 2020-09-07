<template>
  <Card class="policy">
    <h1 slot="title">Privacy Policy</h1>
    <p>
      Your privacy is important to us. Please read this Privacy Policy to learn
      about the information that collects from you and how uses that
      information.
    </p>
    <h2>
      What information do we collect?
    </h2>
    <h3>Information Provided by Users and Other People</h3>
    <ul>
      <li>
        <p>
          Your account information. You provide your email to create an account
          or subscribe to our newsletter. If you refuse to provide such
          information, you may not be able to use the Services properly. When or
          registering on our site, you may be asked to enter your contact
          information, such as your name, avatar, gender, address, telephone
          number and email address.
        </p>
      </li>
      <li>
        <p>
          Customer Support. You can provide us with information about your use
          of the Services, including your product information and how to contact
          you, so that we can provide customer support. For example, you can
          send an email that contains information about our device performance,
          application performance, and other issues.
        </p>
      </li>
    </ul>
    <h2>
      Do we get your consent before collecting information?
    </h2>
    <p>
      Yes. When you use some web functions like registering an account or
      signing up to participate in an event, we will ask you to accept and agree
      to this Privacy Policy.
    </p>
    <p>
      You may withdraw your consent to collect, use, and/or disclose your
      personal information held or controlled by us by submitting a request.
      Based on the extent to which you withdraw your consent to let us process
      your personal information, this may mean that you will not be able to
      access our products and services. Deleting your account will not of itself
      entirely remove associated content from our systems. We will delete
      relevant information that can be clearly identified (like your email,
      name, and country), but information that cannot be clearly identified
      (such as your birthday or gender information) will not be deleted.
    </p>

    <h2>
      What do we use your information for?
    </h2>

    <h3>
      Any of the information we collect from you may be used in one of the
      following ways:
    </h3>

    <ul>
      <li>
        <p>
          To send periodic emails: The email address you provide for order
          processing, may be used to send you information and updates pertaining
          to your order, in addition to receiving occasional company news,
          updates, related product or service information, etc.
        </p>
        <h4>
          Note: If at any time you would like to unsubscribe from receiving
          future emails, we include detailed unsubscription instructions at the
          bottom of each email.
        </h4>
      </li>
      <li>
        <p>
          Our service: We operate and provide Services, including providing
          customer support and improving, repairing, and customizing the
          Services. We understand how people use the Services and analyze and
          use the information we have to evaluate and improve the Services.
        </p>
      </li>
    </ul>

    <h2>
      Privacy of Children
    </h2>

    <p>
      The Services are not directed to or intended for use by minors. Consistent
      with the requirements of applicable law, if we learn that we have received
      any information directly from a minor without his or her parent’s verified
      consent, we will use that information only to respond directly to that
      child (or his or her parent or legal guardian) to inform the minor that he
      or she cannot use the Services and subsequently will delete that
      information.
    </p>

    <p>
      If you are a minor under the age of 16 (according to the legal
      requirements of EU member states, the minimum must not be less than 13
      years old), you must obtain written consent from your parent or legal
      guardian before using this product and its relevant services.
    </p>

    <h2>
      Legal basis
    </h2>

    <ul>
      <li>
        <p>
          1. Unless a contract is agreed upon, the user agrees, or the law
          requires, the data subject should have the right not to be affected by
          automatic decision-making.
        </p>
      </li>
      <li>
        <p>
          2. Data managers should take appropriate measures to protect the
          rights and freedoms of data subjects and legitimate interests, and
          ensure that data subjects have the right to engage with data managers,
          express opinions, and challenge decisions.
        </p>
      </li>
      <li>
        <p>
          3. We collect the information necessary to provide you with services.
          During the collection process, we will strictly abide by laws and
          regulations and will never collect any information prohibited by laws
          or administrative regulations. We also do not collect the content of
          your chats or phone calls.
        </p>
      </li>
    </ul>

    <h2>
      Do we disclose any information to outside parties?
    </h2>

    <p>
      We do not sell, trade, or otherwise transfer to outside parties your
      personally identifiable information. This does not include trusted third
      parties who assist us in operating our website, conducting our business,
      or servicing you, so long as those parties agree to keep this information
      confidential. We may also release your information when we believe release
      is appropriate to comply with the law, enforce our site policies, or
      protect ours or others rights, property, or safety. However,
      non-personally identifiable visitor information may be provided to other
      parties for marketing, advertising, or other use.
    </p>
  </Card>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class Policy extends Vue {}
</script>

<style lang="scss" scoped>
.policy {
  padding-bottom: 1rem;
}
p,
h1,
h2,
h3,
h4 {
  text-align: justify;
}
p,
h3,
h4 {
  text-indent: 2em;
}
</style>
