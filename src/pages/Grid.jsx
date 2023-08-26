import React, { useCallback, useMemo, useState, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const Grid = () => {
	const gridRef = useRef();
	const [rowData, setRowData] = useState(null);
	const [columnDefs] = useState([
		{ field: 'athlete', flex: 1 },
		{ field: 'age', width: 90 },
		{ field: 'country' },
		{ field: 'year', width: 90 },
		{ field: 'date' },
		{ field: 'sport' },
		{
			headerName: 'Medals',
			children: [{ field: 'gold' }, { field: 'silver' }, { field: 'bronze' }, { field: 'total' }]
		},
		{ field: 'isVisible', hide: true }
	]);
	const defaultColDef = useMemo(() => {
		return {
			width: 170,
			suppressSpanHeaderHeight: false,
			suppressMenu: true
		};
	}, []);

	const onGridReady = useCallback(params => {
		fetch('/olympic-winners.json')
			.then(resp => resp.json())
			.then(data => {
				const rowData = data.slice(0, 2000);
				rowData.forEach(row => (row.id = crypto.randomUUID()));
				setRowData(rowData);
			});
	}, []);

	return (
		<>
			<section style={{ display: 'flex', gap: '1em', marginBottom: '0.5em' }}>
				<button
					onClick={() => {
						/**
						 * Flow:
						 * on expand/collapse button click get the type of metric clicked upon
						 * update it in the expansion map
						 * update row data for the matching type of metric, and
						 * set isVisible to true -> set the updated row data to state
						 */
						const newRows = [...rowData];
						newRows.forEach(row => (row.isVisible = true));
						setRowData(newRows);
					}}
				>
					Show All
				</button>

				<button
					onClick={() => {
						const newRows = [...rowData];
						newRows.forEach(row => (row.isVisible = row.age <= 18));
						setRowData(newRows);
					}}
				>
					{'Hide >18'}
				</button>

				<button onClick={() => gridRef.current.api.exportDataAsCsv()}>CSV</button>

				<button onClick={() => gridRef.current.api.exportDataAsExcel()}>Excel</button>
			</section>

			{/* <section style={{ height: '80%' }} className='ag-theme-alpine'> */}
			<AgGridReact
				rowData={rowData}
				columnDefs={columnDefs}
				defaultColDef={defaultColDef}
				onGridReady={onGridReady}
				suppressContextMenu
				ref={gridRef}
				onFirstDataRendered={({ api }) => {
					console.clear();
				}}
				isExternalFilterPresent={() => true}
				doesExternalFilterPass={node => gridRef.current.api.getValue('isVisible', node)}
				defaultCsvExportParams={{
					exportedRows: 'all'
				}}
				defaultExcelExportParams={{
					exportedRows: 'all'
				}}
				animateRows={true}
				className='ag-theme-alpine theme'
				getRowId={({ data }) => data.id}
			/>
			{/* </section> */}

			<article style={{ marginTop: '2rem' }}>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
				been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
				galley of type and scrambled it to make a type specimen book. It has survived not only five
				centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
				It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
				passages, and more recently with desktop publishing software like Aldus PageMaker including
				versions of Lorem Ipsum.
			</article>

			<article style={{ marginTop: '2rem' }}>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
				been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
				galley of type and scrambled it to make a type specimen book. It has survived not only five
				centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
				It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
				passages, and more recently with desktop publishing software like Aldus PageMaker including
				versions of Lorem Ipsum.
			</article>

			<article style={{ marginTop: '2rem' }}>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
				been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
				galley of type and scrambled it to make a type specimen book. It has survived not only five
				centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
				It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
				passages, and more recently with desktop publishing software like Aldus PageMaker including
				versions of Lorem Ipsum.
			</article>
		</>
	);
};

export default Grid;
