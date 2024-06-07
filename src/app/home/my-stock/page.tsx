"use client";
import { observer } from "mobx-react-lite";
import { useStore } from "@/models";
import DataStock from "./DataStock";
import EmptyStock from "./EmptyStock";
import { PageLayout } from "@/common";

export default observer(function MyStock() {
  const {
    products: { tableProducts },
  } = useStore();

  return (
    <PageLayout>
      {tableProducts.length === 0 ? <EmptyStock /> : <DataStock />}
    </PageLayout>
  );
});

// "use client";
// import { observer } from "mobx-react-lite";
// import { useStore } from "@/models";
// import DataStock from "./DataStock";
// import EmptyStock from "./EmptyStock";
// import { PageLayout } from "@/common";
// import { BarLoader } from "@/components/Loader/BarLoader";

// export default observer(function MyStock() {
//   const {
//     products: { tableProducts },
//     fetch: { isFetching },
//   } = useStore();

//   return (
//     <PageLayout>
//       {isFetching ? (
//         <BarLoader />
//       ) : tableProducts ? (
//         <DataStock />
//       ) : (
//         <EmptyStock />
//       )}
//     </PageLayout>
//   );
// });
