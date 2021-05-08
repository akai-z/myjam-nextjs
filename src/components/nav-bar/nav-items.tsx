import React, { Fragment, useState, useEffect } from 'react';
import Link from 'next/link';
import { Grid, Item, DownArrow, Span, SubCategoriesList, RouterLink } from './styles';

interface Props {
  categoriesList: Array<Category>;
  isOpen: boolean;
}

const NavItems: React.FC<Props> = ({ isOpen, categoriesList }) => {
  const [activeId, setActiveId] = useState<string>();
  const handleClick = (categoryId: string) => () =>
    setActiveId(categoryId === activeId ? '' : categoryId);

  useEffect(() => {
    if (!isOpen) {
      setActiveId('');
    }
  }, [isOpen]);

  return (
    <Grid>
      {categoriesList.map((category) => (
        <Item
          key={category.id}
          onClick={handleClick(category.id)}
          className={activeId === category.id ? 'active' : ''}
        >
          <Span>{category.fields.name}</Span>
          {category.fields.sub_categories && category.fields.sub_categories.length > 0 && (
            <Fragment>
              <DownArrow />
              <SubCategoriesList>
                {category.fields.sub_categories.map((id) => (
                  <Link passHref href={`/category/${category.fields.slug}`} key={id}>
                    <RouterLink>Sub Category</RouterLink>
                  </Link>
                ))}
              </SubCategoriesList>
            </Fragment>
          )}
        </Item>
      ))}
    </Grid>
  );
};

export default NavItems;
