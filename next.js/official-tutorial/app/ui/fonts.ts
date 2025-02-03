import { Inter } from 'next/font/google'
import { Lusitana } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'] })

export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700']
})

// subsets
// 使用するサブセットを指定する。
// latinはラテン文字、GoogleFontのSelect preview textのプルダウンで確認できる。

// 設定できる項目は以下
// https://nextjs.org/docs/pages/api-reference/components/font

// weightを指定する方法1：styleを使用する
// <p className={lusitana.className} style={{ fontWeight: 500 }}>

// weightを指定する方法2：variableを指定する（Tailwindと併用する場合）
// export const lusitana = Lusitana({
//   subsets: ['latin'],
//   weight: ['400', '700']
//   vriable: '--font-lusitana',
// })
// <p className="text-xl text-gray-800 font-black">900のテキスト</p>
