// Linkコンポーネント
// 遷移時にページ全体が更新されない＝自動コード分割。
// プリフェッチ（リンク先ページがバックグラウンドで読み込まれている）されるのでページ遷移がほぼ瞬時。

// usePathnameはクライアントコンポーネントでのみ使用可能
'use client'

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname()

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}

// クライアントコンポーネント
// ブラウザ上でJSを実行する必要のあるコンポーネント。
// ユーザーの操作が必要なものはクライアントコンポーネントで実装する。
// useStateなどのReactHooks、onClick等のイベントハンドラを使用できる。
// 'use client'で認識させる（これがないとサーバーコンポーネントとして認識される）。

// サーバーコンポーネント
// サーバー側でデータを取得・処理し、結果をHTMLとして返すためのコンポーネント。
// データの取得（fetch）に向いている。
// ReactHooksやイベントハンドラを使用できない。
// データ取得やHTMLのレンダリングだけならサーバコンポーネントで実装する（速い）。