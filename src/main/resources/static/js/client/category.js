document.addEventListener('DOMContentLoaded', function () {
	// thymeleaf inline, replace with #httpServletRequest.getContextPath() if not work
	const contextPath = /*[[@{/}]]*/ '';
	ajaxGet2(contextPath);

	function ajaxGet2(contextPath) {
		fetch('http://localhost:8080/api/danh-muc/allForReal')
			.then(response => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json();
			})
			.then(result => {
				result.forEach(category => {
					const content = `
						  <li><a href="${contextPath}/store?category=${category.categoryName}">
							  <span style="font-size: 16px; font-weight: 900;">${category.categoryName}</span>
							</a></li>`;
					const content2 = `
						  <li><a style="padding-right: 100px" href="${contextPath}/store?category=${category.categoryName}">
							  ${category.categoryName}
							</a></li>`;
					document.getElementById('category').insertAdjacentHTML('beforeend', content);
					document.getElementById('category2').insertAdjacentHTML('beforeend', content2);
				});
			})
			.catch(error => {
				console.error('Error:', error);
			});
	}
});