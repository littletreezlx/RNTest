// import React, {
//   forwardRef,
//   useEffect,
//   useImperativeHandle,
//   useRef,
//   useState,
//   memo,
//   useCallback,
// } from 'react';
// import {FooterView} from './ListFooterView';
// import {useRequestPagination} from '../../util/Network/useRequestPagination';
// import type {HTTPRequest} from '../../util/Network/useHTTPRequest';
// import {Tabs} from 'react-native-collapsible-tab-view';
// import NativeModuleUtils from '../../util/Native/NativeModuleUtils';
// import {useMemo} from 'react';
// import type {FlatListProps} from 'react-native';

// interface BasePageListViewProps {
//   getDataJson: HTTPRequest;
//   dataListKey: string;
//   EmptyView: () => React.ReactElement;
//   //require那段不知道怎么穿
//   // emptyImageUrl?: string;
//   // emptyDesc?: string;
//   //第三方库那个FlatList不一样。。。
//   isCollapseTabViewMode: boolean;
// }

// type Props<T> = BasePageListViewProps & FlatListProps<T>;

// // function HocPageList<T>(InnerComponent, {getDataJson, dataListKey, EmptyView}: Props<T>) {
// // function HocPageList<T>(InnerComponent, props: Props<T>) {
// function HocPageList<T>(prop) {
//   console.log(props);
//   // ref: any,
//   const [dataList, setDataList] = useState<T[]>([]);
//   const hasMore = useRef<boolean>(false);
//   const isLoaded = useRef<boolean>(false);
//   const lastId = useRef<string>('-1');

//   // useImperativeHandle(ref, () => ({
//   //   getList: () => dataList,
//   //   updateList: (updateStateFun: (oldState: T[]) => T[]) => {
//   //     setDataList(updateStateFun);
//   //   },
//   //   refresh: () => {
//   //     onRefresh();
//   //   },
//   // }));

//   const {
//     response: dataResp,
//     fetch: getData,
//     refetch: refetchData,
//     fetchMore: getMoreData,
//   } = useRequestPagination<T>();

//   useEffect(() => {
//     getData(getDataJson);
//   }, []);

//   //这边接口也没有完全统一，就动态传吧
//   useEffect(() => {
//     if (dataResp.data) {
//       let newFans = dataResp.data[dataListKey];
//       const setSuccessState = () => {
//         hasMore.current = dataResp.data?.has_more ?? false;
//         lastId.current = dataResp.data?.last_id?.toString() ?? '-1';
//       };
//       if (dataResp.state === 'Success') {
//         isLoaded.current = true;
//         setDataList(state => {
//           return [...state, ...(newFans ?? [])];
//         });
//         setSuccessState();
//       }
//       if (dataResp.state === 'RefetchSuccess') {
//         setDataList(newFans ?? []);
//         setSuccessState();
//       }
//     }
//   }, [dataResp, dataListKey]);

//   useEffect(() => {
//     if (dataResp.state === 'Loading') {
//       NativeModuleUtils.showLoading();
//     } else {
//       NativeModuleUtils.hideLoading();
//     }
//   }, [dataResp]);

//   const ListFooterView = useCallback(() => {
//     if (isLoaded.current === true && dataList.length !== 0) {
//       return (
//         <FooterView
//           hasMore={hasMore.current}
//           isFetchingMore={dataResp.state === 'FetchingMore'}
//         />
//       );
//     } else {
//       return null;
//     }
//   }, [dataList.length, dataResp.state]);

//   // const TestListEmptyView = () => {
//   //   return (
//   // <View style={{marginTop: 200, alignItems: 'center', justifyContent: 'center'}}>
//   //   <Image source={require(emptyImageUrl)} />
//   //   <Text style={{marginTop: 10, color: '#999999', fontSize: 12}}>{emptyDesc}</Text>
//   // </View>
//   // );
//   // };

//   // 加载结果完成之前不显示空View
//   const ListEmptyView = useCallback(() => {
//     if (isLoaded.current === true && dataList.length === 0) {
//       return <EmptyView />;
//     } else {
//       return null;
//     }
//   }, [EmptyView, dataList.length]);

//   const onEndReached = useCallback(() => {
//     if (
//       dataResp.state !== 'FetchingMore' &&
//       dataResp.state !== 'Refetching' &&
//       hasMore.current
//     ) {
//       getMoreData({last_id: lastId.current});
//     }
//   }, [dataResp.state, getMoreData]);

//   const onRefresh = useCallback(() => {
//     lastId.current = '-1';
//     refetchData();
//   }, [refetchData]);

//   const isShowRefreshControl = useMemo(() => {
//     if (lastId.current === '-1') {
//       return dataResp.state === 'Loading';
//     } else {
//       return dataResp.state === 'Refetching';
//     }
//   }, [dataResp.state]);

//   return () => (
//     <InnerComponent
//       data={dataList}
//       ListFooterComponent={ListFooterView}
//       ListEmptyComponent={ListEmptyView}
//       onEndReachedThreshold={0.4}
//       onEndReached={onEndReached}
//       onRefresh={onRefresh}
//       refreshing={isShowRefreshControl}
//       // {...flatListProps}
//     />
//   );
// }

// // export default forwardRef(BasePageListView);
// export default HocPageList;

// const FanList = HocPageList(
//   <FlatList<ResponseLiteLookMember>
//     data={[]}
//     renderItem={renderItem}
//     keyExtractor={keyExtractor}
//   />,
//   {
//     getDataJson: getDataJson,
//     dataListKey: 'list',
//     EmptyView: emptyView,
//     isCollapseTabViewMode: false,
//   },
// );
