import React from 'react'
import Layout from '@/components/layout'
import Products from '@/components/products'
import { useTranslation } from 'next-i18next';

const Menu = () => {

  const { t } = useTranslation('common')

  return (
    <Layout>
      <Products />
    </Layout>
  )
}

export default Menu