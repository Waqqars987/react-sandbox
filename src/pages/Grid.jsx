import React, { useCallback, useMemo, useState, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import { Box, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { renderToStaticMarkup } from 'react-dom/server';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const Grid = () => {
	const gridRef = useRef();
	const [rowData] = useState([
		{
			date: '2021-06-06',
			athlete: 'Jacob Parrish'
		},
		{
			date: '2004-01-09',
			athlete: 'Shoshana Combs'
		},
		{
			date: '2002-09-03',
			athlete: 'Flynn Fulton'
		},
		{
			date: '2023-10-26',
			athlete: 'Brendan Munoz'
		},
		{
			date: '2019-03-21',
			athlete: 'Baker Andrews'
		},
		{
			date: '2013-03-07',
			athlete: 'Yetta Rutledge'
		},
		{
			date: '2003-12-24',
			athlete: 'Mohammad Oneal'
		},
		{
			date: '1999-01-05',
			athlete: 'Emery Lowe'
		},
		{
			date: '2000-11-03',
			athlete: 'Ginger Frye'
		},
		{
			date: '2020-09-20',
			athlete: 'Wynne Hess'
		},
		{
			date: '2015-07-17',
			athlete: 'Allen Mccall'
		},
		{
			date: '2022-04-15',
			athlete: 'Damon Schwartz'
		},
		{
			date: '2007-10-07',
			athlete: 'Aquila Ayala'
		},
		{
			date: '2007-06-14',
			athlete: 'Dalton Shaffer'
		},
		{
			date: '2014-02-24',
			athlete: 'Jescie Jimenez'
		},
		{
			date: '2017-05-15',
			athlete: 'Sonia Short'
		},
		{
			date: '2004-07-10',
			athlete: 'Garrett Day'
		},
		{
			date: '1995-12-15',
			athlete: 'Anne Cleveland'
		},
		{
			date: '2014-04-13',
			athlete: 'Bradley Hoffman'
		},
		{
			date: '1997-12-06',
			athlete: 'Maxwell Stone'
		},
		{
			date: '2002-03-07',
			athlete: 'Lamar Crosby'
		},
		{
			date: '2004-01-13',
			athlete: 'Clayton Blevins'
		},
		{
			date: '1998-11-24',
			athlete: 'Aphrodite Wilcox'
		},
		{
			date: '2005-09-13',
			athlete: 'Ruby Campbell'
		},
		{
			date: '2014-04-29',
			athlete: 'Michelle Avery'
		},
		{
			date: '2015-12-30',
			athlete: 'Madaline Gardner'
		},
		{
			date: '2015-02-01',
			athlete: 'Raja Wilson'
		},
		{
			date: '2006-07-10',
			athlete: 'Graham Potter'
		},
		{
			date: '2022-06-01',
			athlete: 'Ira Pena'
		},
		{
			date: '1997-03-09',
			athlete: 'Kaseem Mcguire'
		},
		{
			date: '2002-05-25',
			athlete: 'Lara Sherman'
		},
		{
			date: '2024-04-25',
			athlete: 'Jena Schneider'
		},
		{
			date: '2001-09-03',
			athlete: 'Hermione Garza'
		},
		{
			date: '2018-10-03',
			athlete: 'Savannah Soto'
		},
		{
			date: '1996-12-14',
			athlete: 'Steven Emerson'
		},
		{
			date: '2004-12-13',
			athlete: 'Barbara Nieves'
		},
		{
			date: '2018-05-29',
			athlete: 'Jade Donovan'
		},
		{
			date: '2020-04-27',
			athlete: 'Kane Baker'
		},
		{
			date: '1998-12-10',
			athlete: 'Paloma Arnold'
		},
		{
			date: '2009-09-01',
			athlete: 'Rooney Eaton'
		},
		{
			date: '2008-01-10',
			athlete: 'Micah Monroe'
		},
		{
			date: '2017-04-09',
			athlete: 'Farrah Flynn'
		},
		{
			date: '2006-08-06',
			athlete: 'Jasper Swanson'
		},
		{
			date: '2018-07-11',
			athlete: 'Hamilton Harris'
		},
		{
			date: '2011-07-07',
			athlete: 'Amena Lynn'
		},
		{
			date: '2017-10-27',
			athlete: 'Alexandra Key'
		},
		{
			date: '2004-09-19',
			athlete: 'Vaughan Church'
		},
		{
			date: '2022-12-24',
			athlete: 'Buckminster Sweet'
		},
		{
			date: '2012-05-24',
			athlete: 'Eleanor Strong'
		},
		{
			date: '2002-05-23',
			athlete: 'Travis Petty'
		},
		{
			date: '2010-04-25',
			athlete: 'Merrill Benson'
		},
		{
			date: '2014-04-10',
			athlete: 'Delilah Flynn'
		},
		{
			date: '2020-01-19',
			athlete: 'Neville Price'
		},
		{
			date: '2006-11-03',
			athlete: 'Skyler Olsen'
		},
		{
			date: '1996-09-24',
			athlete: 'Tanya Mueller'
		},
		{
			date: '2007-08-31',
			athlete: 'Ivy Campbell'
		},
		{
			date: '2012-07-20',
			athlete: 'Amery Dean'
		},
		{
			date: '1996-06-24',
			athlete: 'Mary Ross'
		},
		{
			date: '2013-04-20',
			athlete: 'Yasir Stokes'
		},
		{
			date: '2015-08-14',
			athlete: 'Dillon Potts'
		},
		{
			date: '2015-09-27',
			athlete: 'Ariana Clemons'
		},
		{
			date: '1997-12-28',
			athlete: 'Ethan Schwartz'
		},
		{
			date: '2009-11-05',
			athlete: 'Elijah Dean'
		},
		{
			date: '2017-09-12',
			athlete: 'Mercedes Harmon'
		},
		{
			date: '2019-01-15',
			athlete: 'Cleo Jensen'
		},
		{
			date: '2022-07-06',
			athlete: 'Hanna Hammond'
		},
		{
			date: '2011-12-14',
			athlete: 'Quail Boone'
		},
		{
			date: '2011-12-25',
			athlete: 'Lisandra Griffin'
		},
		{
			date: '2006-12-22',
			athlete: 'Althea Medina'
		},
		{
			date: '2008-02-27',
			athlete: 'Julian Gilliam'
		},
		{
			date: '2021-01-04',
			athlete: 'Edward Walsh'
		},
		{
			date: '2020-07-05',
			athlete: 'Tallulah Watkins'
		},
		{
			date: '2023-11-23',
			athlete: 'Veronica Tran'
		},
		{
			date: '2011-07-08',
			athlete: 'Charde Guy'
		},
		{
			date: '2001-12-29',
			athlete: 'Isaac Chang'
		},
		{
			date: '2006-11-01',
			athlete: 'Kenneth Reilly'
		},
		{
			date: '2014-10-13',
			athlete: 'Madeson Sykes'
		},
		{
			date: '1999-06-08',
			athlete: 'Giacomo Hodge'
		},
		{
			date: '2014-09-17',
			athlete: 'Wang Church'
		},
		{
			date: '1996-05-18',
			athlete: 'Lydia Arnold'
		},
		{
			date: '1999-03-16',
			athlete: 'Justine Finley'
		},
		{
			date: '2021-05-04',
			athlete: 'Melissa Schneider'
		},
		{
			date: '1997-10-08',
			athlete: 'Michelle Duffy'
		},
		{
			date: '1998-11-12',
			athlete: 'Clinton Barron'
		},
		{
			date: '2004-03-15',
			athlete: 'Adria Bauer'
		},
		{
			date: '2012-09-26',
			athlete: 'Cara Fitzpatrick'
		},
		{
			date: '2014-06-22',
			athlete: 'Jin Gillespie'
		},
		{
			date: '2016-05-10',
			athlete: 'Hayley Franks'
		},
		{
			date: '2017-01-06',
			athlete: 'Robin Woodward'
		},
		{
			date: '1999-08-24',
			athlete: 'Hunter Hampton'
		},
		{
			date: '2011-07-15',
			athlete: 'Mohammad Matthews'
		},
		{
			date: '2006-01-06',
			athlete: 'Octavia Edwards'
		},
		{
			date: '1997-09-12',
			athlete: 'Serena Buchanan'
		},
		{
			date: '2003-03-20',
			athlete: 'Eagan Owens'
		},
		{
			date: '2006-09-15',
			athlete: 'Miriam Battle'
		},
		{
			date: '2019-11-14',
			athlete: 'Hanna Whitfield'
		},
		{
			date: '2012-07-06',
			athlete: 'Celeste Day'
		},
		{
			date: '2006-04-16',
			athlete: 'Buckminster Olsen'
		},
		{
			date: '2005-08-01',
			athlete: 'Chelsea Burris'
		},
		{
			date: '2014-09-27',
			athlete: 'Charles Suarez'
		}
	]);
	const [columnDefs] = useState([{ field: 'athlete' }, { field: 'date', cellDataType: 'dateString' }]);
	const defaultColDef = useMemo(
		() => ({
			flex: 1,
			editable: true,
			sortable: true,
			unSortIcon: true,
			filter: true
		}),
		[]
	);

	const onGridReady = useCallback(() => {
		console.clear();
	}, []);

	const getContextMenuItems = useCallback(params => {
		console.log(params);
		const result = [
			{
				name: 'Delete row',
				action: () => {
					window.alert('Alerting about ' + params.value);
				},
				disabled: false,
				icon: renderToStaticMarkup(<DeleteIcon />),
				tooltip: 'Delete row'
			},
			'separator',
			...params.defaultItems.slice(1)
		];

		return result;
	}, []);

	const getMainMenuItems = useCallback(params => {
		console.log(params);
		// switch (params.column.getId()) {
		// 	case 'athlete':
		// 		const athleteMenuItems = params.defaultItems.slice();
		// 		athleteMenuItems.push({
		// 			name: 'AG Grid Is Great',
		// 			action: () => {
		// 				console.log('AG Grid is great was selected');
		// 			}
		// 		});
		// 		return athleteMenuItems;

		return [{ name: 'Delete Column' }, ...params.defaultItems];
	}, []);

	return (
		<>
			<Button
				variant='contained'
				color='secondary'
				onClick={() => {
					const selectedRows = gridRef.current.api.getSelectedRows();
					console.log('🚀 ~ <Buttonvariant ~ selectedRows:', selectedRows);
				}}
				sx={{ alignSelf: 'flex-start' }}
			>
				Get Selected Rows
			</Button>

			<Box className='ag-theme-alpine' sx={{ flexGrow: 1 }} component='section'>
				<AgGridReact
					rowData={rowData}
					columnDefs={columnDefs}
					defaultColDef={defaultColDef}
					onGridReady={onGridReady}
					rowSelection='multiple'
					enableRangeSelection={true}
					enableCharts={true}
					enableRangeHandle={true}
					ref={gridRef}
					defaultCsvExportParams={{
						exportedRows: 'all'
					}}
					defaultExcelExportParams={{
						exportedRows: 'all'
					}}
					animateRows={true}
					onCellContextMenu={event => {
						if (!event.node.isSelected()) {
							event.node.setSelected(true, true);
						}
					}}
					getContextMenuItems={getContextMenuItems}
					getMainMenuItems={getMainMenuItems}
				/>
			</Box>
		</>
	);
};

export default Grid;
