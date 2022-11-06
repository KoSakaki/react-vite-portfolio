import '../index.css'

export const Body = () => {

  const layer = {
    display: 'flex',
  }

  return (
    <div className ="flex justify-center">
      <div>
        <h1>株式会社 FLAG</h1>
        <h2>業務で実装で行ったこと</h2>
        <h3>開発環境の改善</h3>
        <ul>
          <li>gihub Actionsを用いたCI/CDパイプラインの構築</li>
          <li>開発環境の改善として、Dockerコンテナを用いて、開発環境のDocker化</li>
          <li>バグ修正による開発コストの削減</li>
        </ul>
        <h3>新機能の実装</h3>
        <ul>
          <li>グラフによる売り上げ管理機能</li>
          <ul>
            <li>MySQLによるデータ取得</li>
            <li>サーバーサイドをPHPにて実装</li>
            <li>フロントエンドをVue.jsによる実装</li>
          </ul>
          <li>新機能ケイバイ(オークション機能の実装)</li>
          <ul>
            <li>要件定義</li>
            <li>CI/CDパイプラインの構築</li>
            <li>実装</li>
          </ul>
          <li>バグの修正</li>
        </ul>
      </div>
      <a href="https://flag.gg">
      <img src="https://www.g-mark.org/media/award/2021/21G161431/21G161431_01_880x660.jpg?w=500&h=450&m=0" alt="Logo" />
      </a>
    </div>
  )

}
