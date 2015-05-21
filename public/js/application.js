
$(document).ready(loadHangmansApp);
		function loadHangmansApp(){
			console.log("yo");
			mainCollection = new HangmansCollection();
			mainCollectionView = new HangmansListView({collection: mainCollection})
			mainCollection.fetch();
		}