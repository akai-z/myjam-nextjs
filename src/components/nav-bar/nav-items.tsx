import React, { Fragment, useState, useEffect } from 'react';
import Link from 'next/link';
import { Grid, Item, DownArrow, Span, SubCategoriesList, RouterLink } from './styles';
import { normalizeData } from '@utils/helper';

interface Props {
  categories: Array<Category>;
  isOpen: boolean;
}

const NavItems: React.FC<Props> = ({ isOpen, categories }) => {
  const [activeId, setActiveId] = useState<string>();
  const handleClick = (categoryId: string) => () =>
    setActiveId(categoryId === activeId ? '' : categoryId);

  const normalizedCategories = normalizeData(categories);

  const renderSubCategory = (id: string) => {
    const category = normalizedCategories[id];
    if (!category) return <Fragment />;

    return (
      <Link passHref href={`/category/${category.fields.slug}`} key={id}>
        <RouterLink>{category.fields.name}</RouterLink>
      </Link>
    );
  };

  useEffect(() => {
    if (!isOpen) {
      setActiveId('');
    }
  }, [isOpen]);

  return (
    <Grid>
      {categories
        .filter(({ fields }) => fields.main_category)
        .map((category) => (
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
                  {category.fields.sub_categories.map(renderSubCategory)}
                </SubCategoriesList>
              </Fragment>
            )}
          </Item>
        ))}
    </Grid>
  );
};

export default NavItems;
