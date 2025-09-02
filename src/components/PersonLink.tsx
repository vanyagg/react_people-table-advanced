import React from 'react';
import { Person } from '../types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

type Props = {
  person: Person;
};

export const PersonLink: React.FC<Props> = ({ person }) => {
  return (
    <Link
      to={`/people/${person.slug}`}
      className={classNames(person.sex === 'f' ? 'has-text-danger' : '')}
    >
      {person.name}
    </Link>
  );
};
