import ComparisonCard from '../../components/comparisoncard/ComparisonCard';
import type { ProductDetail } from '../../utils/types';
import styles from './ComparisonPage.module.css'

function ComparisonPage (props : {products: ProductDetail[]}) {
  const {products} = props;
  return <main className={styles.main}>
    <h2>Comparing Products</h2>
    <div className={styles.comparisoncard_container}>
    {
      products.map(product => <ComparisonCard product={product}/>)
    }
    </div>
  </main>
}

export default ComparisonPage;