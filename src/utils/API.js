import $ from "jquery";
export default {
	getData: function(email) {
		var settings = {
			async: true,
			crossDomain: true,
			url:
				"https://xpresstaxappeals.com/clientprofile/dashboard/jc_scalabre@hotmail.com",
			method: "GET"
		};

		$.ajax(settings).done(function(response) {
			console.log(response)
			console.log(response.indexOf("var data"));
		});
	}
};
