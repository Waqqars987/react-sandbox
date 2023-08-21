import React, { useCallback, useMemo, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const Grid = () => {
	const [rowData, setRowData] = useState();
	const [columnDefs] = useState([
		{ field: 'athlete' },
		{ field: 'age', width: 90 },
		{ field: 'country', rowGroup: true, hide: true },
		{ field: 'year', width: 90 },
		{ field: 'date' },
		{ field: 'sport' },
		{
			headerName: 'Medals',
			children: [{ field: 'gold' }, { field: 'silver' }, { field: 'bronze' }, { field: 'total' }]
		}
	]);
	const defaultColDef = useMemo(() => {
		return {
			width: 170,
			suppressSpanHeaderHeight: false
		};
	}, []);

	const onGridReady = useCallback(params => {
		fetch('/olympic-winners.json')
			.then(resp => resp.json())
			.then(data => setRowData(data.slice(0, 2000)));
	}, []);

	return (
		<div style={{ height: '80%' }} className='ag-theme-alpine'>
			<AgGridReact
				rowData={rowData}
				columnDefs={columnDefs}
				defaultColDef={defaultColDef}
				onGridReady={onGridReady}
				groupAllowUnbalanced={true}
				suppressContextMenu
				autoGroupColumnDef={{
					flex: 1,
					field: 'country',
					cellRendererParams: {
						suppressCount: true
					}
				}}
				groupRemoveSingleChildren
			/>

			<article style={{ marginTop: '2rem' }}>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
				been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
				galley of type and scrambled it to make a type specimen book. It has survived not only five
				centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
				It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
				passages, and more recently with desktop publishing software like Aldus PageMaker including
				versions of Lorem Ipsum.
			</article>
		</div>
	);
};

export default Grid;
