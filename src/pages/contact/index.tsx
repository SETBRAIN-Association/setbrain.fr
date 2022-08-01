import React from 'react';
import styles from './_Contact.module.scss';
import BigTitle from '../../components/big-title/big-title';
import { ContactInformations } from '../../components/contact-informations/contact-informations';

export type ContactProps = {
  path: string;
};

export default function Index({}: ContactProps) {
  return (
    <div className={styles['Contact']} data-scroll-section>
      <BigTitle position='left'>
        <h1>Des questions ou des remarques ?</h1>
        <h1>
          <span>Ecrivez-nous !</span>
        </h1>
      </BigTitle>
      <ContactInformations></ContactInformations>
    </div>
  );
}
