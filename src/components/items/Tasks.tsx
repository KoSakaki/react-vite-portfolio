
export const Tasks = () => {
  const productFunctions = ['EC', 'サブスクリプション', 'クラウドファンディング', 'ファンクラブ　コミュニティ(掲示板)', 'SNS機能', 'SNS機能共有', 'イベントスケジュール告知'];
  return (
    <>
      <h1 className="flex justify-center">職務内容</h1>
      <div className="flex justify-center">
        <div>
          <h1 className="font-bold text-2xl flex justify-center">株式会社 FLAG</h1>
            <a href="https://flag.gg" target="_Blank" className="flex justify-center">
              <img src="https://www.g-mark.org/media/award/2021/21G161431/21G161431_01_880x660.jpg?w=600&h=550&m=0" alt="Logo" />
            </a>
          <h2 className="font-bold text-xl">このwebサイトでできること</h2>
          <div className="flex justify-center item-center flex-wrap">
            {
              productFunctions.map((element, index) => (
                index===productFunctions.length-1 ? <h2>{element} </h2>: <h2>{element},　</h2>
              ))
            }
          </div>
          <h2 className="text-xl">業務で実装で行ったこと</h2>
          <div className="mx:flex mx:justify-center sm:block">
            <div>
              <h3 className="font-bold text-xl">新機能の実装</h3>
                <li>グラフによる売り上げ管理機能</li>
                <li>サーバーサイドをPHPにて実装</li>
                <li>MySQLによるデータ取得</li>
                <li>フロントエンド側をVue.jsによる実装</li>
                <li>新機能ケイバイ(オークション機能の実装)</li>
                <li>要件定義</li>
                <li>CI/CDパイプラインの構築</li>
                <li>様々なバグの修正</li>
              <h3 className="font-bold text-xl">開発環境の改善</h3>
                <li>開発環境の改善として、Dockerコンテナを用いて、開発環境のDocker化</li>
                <li>バグ修正による開発コストの削減</li>
                <li>gihub Actionsを用いたCI/CDパイプラインの構築</li>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
