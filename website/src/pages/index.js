import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout title="EDLM" description="Документация по варианту 2">
      <main style={{ padding: '2rem' }}>
        <h1>EDLM</h1>
        <p>Документация собрана в Docusaurus и опубликована через GitHub Pages.</p>
        <p>
          <Link to="/docs/intro">Открыть документацию</Link>
        </p>
      </main>
    </Layout>
  );
}
