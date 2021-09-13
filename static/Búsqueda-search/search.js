document.write("<script language=\"JavaScript\" src=\"/js/s_index.js\" charset=\"" + Charset + "\"><\/script>");
document.write("<script language=\"JavaScript\" src=\"/js/s_pageinfo.js\" charset=\"" + Charset + "\"><\/script>");

function getParam(paramName)
{
	paramStr = document.location.search;
	if (paramStr == "")
		return "";


	if (paramStr.charAt(0) == "?")
		paramStr = paramStr.substr(1);

	arg = (paramStr.split("&"));
	for (i=0; i < arg.length; i++) {
		arg_values = arg[i].split("=")
		if (unescape(arg_values[0]) == paramName)
		{
			if (paramName == "s")
				arg_values[1] = arg_values[1].replace(/[\+]/g, " ");  

			if (UseUTF8 == 1 && self.decodeURIComponent) 
				ret = decodeURIComponent(arg_values[1]);
			else
				ret = unescape(arg_values[1]);  
			return ret;
		}
	}
	return "";
}

function getParamArrayInt(paramName)
{
	paramStr = document.location.search;

	var retArray = new Array();
	var retCount = 0;

	if (paramStr == "")
		return retArray;

	if (paramStr.charAt(0) == "?")
		paramStr = paramStr.substr(1);

	arg = (paramStr.split("&"));
	for (i=0; i < arg.length; i++)
	{
		arg_values = arg[i].split("=")
		if (unescape(arg_values[0]) == paramName)
		{
			if (UseUTF8 == 1 && self.decodeURIComponent) 
				ret = decodeURIComponent(arg_values[1]);
			else
				ret = unescape(arg_values[1]);  

			if (isNaN(ret) == false)
			{
				retArray[retCount] = ret;
				retCount++;
			}
		}
	}
	return retArray;
}


function SortCompare (a, b)
{
	if (a[2] < b[2]) return 1;
	else if (a[2] > b[2]) return -1;
	else if (a[1] < b[1]) return 1;
	else if (a[1] > b[1]) return -1;
	else return 0;
}

function SortByDate(a, b)
{
	if (pageinfo[a[0]][PAGEINFO_DATETIME] < pageinfo[b[0]][PAGEINFO_DATETIME]) return 1;
	else if (pageinfo[a[0]][PAGEINFO_DATETIME] > pageinfo[b[0]][PAGEINFO_DATETIME]) return -1;
	else return SortCompare(a, b);
}

function sw_compare(a, b)
{
	if (a.charAt(0) == '-')
		return 1;

	if (b.charAt(0) == '-')
		return -1;

	return 0;
}

function pattern2regexp(pattern)
{
	pattern = pattern.replace(/\#/g, "\\#");
	pattern = pattern.replace(/\$/g, "\\$");
	pattern = pattern.replace(/\./g, "\\.");
	pattern = pattern.replace(/\*/g, "[\\d\\S]*");
	pattern = pattern.replace(/\?/g, ".?");
	return pattern;
}

function PrintHighlightDescription(line)
{
	if (Highlighting == 0)
	{
		document.writeln(line);
		return;
	}

	res = " " + line + " ";
	for (i = 0; i < NumSearchWords; i++) {
		if (RegExpSearchWords[i] == "")
			continue;

		if (SearchAsSubstring == 1)
			res = res.replace(new RegExp("("+RegExpSearchWords[i]+")", "gi"), "[;:]$1[:;]");
		else
			res = res.replace(new RegExp("(\\W|^|\\b)("+RegExpSearchWords[i]+")(\\W|$|\\b)", "gi"), "$1[;:]$2[:;]$3");
	}

	res = res.replace(/\[;:\]/g, "<span class=\"highlight\">");
	res = res.replace(/\[:;\]/g, "</span>");
	document.writeln(res);
}

function PrintNumResults(num)
{
	if (num == 0)
		return STR_NO_RESULTS;
	else if (num == 1)
		return num + " " + STR_RESULT;
	else
		return num + " " + STR_RESULTS;
}

function RecLinkAddParamToURL(url, paramStr)
{

	if (url.indexOf("?") > -1)
		return url + "&amp;" + paramStr;
	else
	{
		hashPos = url.indexOf("#");
		if (hashPos > -1)
			return url.substr(0, hashPos) + "?" + paramStr + url.substr(hashPos);
		else		
			return url + "?" + paramStr;
	}
}

function AddParamToURL(url, paramStr)
{

	if (url.indexOf("?") > -1)
		return url + "&amp;" + paramStr;
	else
		return url + "?" + paramStr;
}


function SkipSearchWord(sw) {
	if (searchWords[sw] != "") {
		if (SkippedWords > 0)
			SkippedOutputStr += ", ";
		SkippedOutputStr += "\"<b>" + searchWords[sw] + "</b>\"";
		searchWords[sw] = "";
		SkippedWords++;
	}
}

function wordcasecmp(word1, word2) {
	if (word1 == word2)
		return 0;
	else
		return -1;
}

function htmlspecialchars(query) {
	query = query.replace(/\&/g, "&#38;");
	query = query.replace(/\</g, "&#60;");
	query = query.replace(/\>/g, "&#62;");
	query = query.replace(/\"/g, "&#34;");
	query = query.replace(/\'/g, "&#39;");
	return query;
}

function QueryEntities(query) {
	query = query.replace(/\&/g, "&#38;");
	query = query.replace(/\</g, "&#60;");
	query = query.replace(/\>/g, "&#62;");
	query = query.replace(/\'/g, "&#39;");
	return query;
}

function FixQueryForAsianWords(query) {
	currCharType = 0;
	lastCharType = 0;   
	newquery = "";
	for (i = 0; i < query.length; i++)
	{
		ch = query.charAt(i);
		chVal = query.charCodeAt(i);

		if (chVal >= 12352 && chVal <= 12447)
			currCharType = 1;
		else if (chVal >= 12448 && chVal <= 12543)
			currCharType = 2;
		else if (chVal >= 13312 && chVal <= 44031)
			currCharType = 3;
		else
			currCharType = 0;

		if (lastCharType != currCharType && ch != " ")
			newquery += " ";
		lastCharType = currCharType;
		newquery += ch;
	}
	return newquery;
}

function GetMetaValues(pagenum, fieldnum)
{
	return pageinfo[pagenum][PAGEINFO_METAFIRST+fieldnum];
}



var query = getParam("s");
query = query.replace(/[\"]/g, " ");
var requerimiento = 0;
if (query.length == 0)
{
	if (document.location.search.indexOf("s") != -1)
		requerimiento = 1;
}

var per_page = parseInt(getParam("s-page"));
if (isNaN(per_page)) per_page = 10;
if (per_page < 1) per_page = 1;

var page = parseInt(getParam("s_page"));
if (isNaN(page)) page = 1;

var andq = parseInt(getParam("xy"));
if (isNaN(andq))
{
	if (typeof(DefaultToAnd) != "undefined" && DefaultToAnd == 1)
		andq = 1;
	else
		andq = 0;
}



var sort = parseInt(getParam("salida"));
if (isNaN(sort)) sort = 0;

var SelfURL = "";
var LinkBackJoinChar = "?";
if (typeof(LinkBackURL) == "undefined")
{
	SelfURL = document.location.href;

	var paramIndex;
	paramIndex = SelfURL.indexOf("?");
	if (paramIndex > -1)
		SelfURL = SelfURL.substr(0, paramIndex);
	paramIndex = SelfURL.indexOf("#");
	if (paramIndex > -1)
		SelfURL = SelfURL.substr(0, paramIndex);
}
else
{
	SelfURL = LinkBackURL;	
}

if (SelfURL.indexOf("?") != -1)
	LinkBackJoinChar = "&amp;";


SelfURL = SelfURL.replace(/\</g, "&lt;");
SelfURL = SelfURL.replace(/\"/g, "&quot;");

var data = new Array();
var output = new Array();

var objetivo = "";
if (UseLinkTarget == 1)
	objetivo = " target=\"" + LinkTarget + "\" ";

if (UseCats)
	NumCats = catnames.length;

var query_prueba = "";
var queryForHTML, queryForURL, queryForSearch;
var metaParams;
var UseWildCards;

var matches = 0;



var InitSearchCalled = false;
var IsWarningGiven = false;
var IsEmptyMetaQuery = false;
var IsNoSearch = false;
function InitSearch()
{

	IsWarningGiven = true;

	if (Timing == 1)
		timeStart = new Date();

	InitSearchCalled = true;

	IsEmptyMetaQuery = false;
	if (query.length == 0)
	{
		if (UseMetaFields == 1)
		{
			if (requerimiento == 1)
				IsEmptyMetaQuery = true;
			else
				IsNoSearch = true;
		}
		else
			IsNoSearch = true;

		if (IsNoSearch)
			return;
	}

	if (MapAccents == 1)
	{
		for (i = 0; i < NormalChars.length; i++)
			query = query.replace(new RegExp(AccentChars[i], "g"), NormalChars[i]);
	}


	if (SearchAsSubstring == 1 && UseUTF8 == 1)
		query = FixQueryForAsianWords(query);

	if (WordJoinChars.indexOf(".") == -1)
		query = query.replace(/[\.]/g, " ");

	if (WordJoinChars.indexOf("-") == -1)
		query = query.replace(/(\S)\-/g, "$1 ");

	if (WordJoinChars.indexOf("#") == -1)
		query = query.replace(/\#(\S)/g, " $1");

	if (WordJoinChars.indexOf("+") == -1)
	{
		query = query.replace(/[\+]+([^\+\s])/g, " $1");
		query = query.replace(/([^\+\s])\+\s/g, "$1 ");
	}

	if (WordJoinChars.indexOf("_") == -1)
		query = query.replace(/[\_]/g, " ");

	if (WordJoinChars.indexOf("'") == -1)
		query = query.replace(/[\']/g, " ");

	if (WordJoinChars.indexOf("$") == -1)
		query = query.replace(/[\$]/g, " ");

	if (WordJoinChars.indexOf("&") == -1)
		query = query.replace(/[\&]/g, " ");

	if (WordJoinChars.indexOf(":") == -1)
		query = query.replace(/[\:]/g, " ");

	if (WordJoinChars.indexOf(",") == -1)
		query = query.replace(/[\,]/g, " ");

	if (WordJoinChars.indexOf("/") == -1)
		query = query.replace(/[\/]/g, " ");

	if (WordJoinChars.indexOf("\\") == -1)
		query = query.replace(/[\\]/g, " ");

	query = query.replace(/[\s\(\)\^\[\]\|\{\}\%\£\!]+|[\-._',:&\/\\\\](\s|$)/g, " ");


	query = query.replace(/^\s*|\s*$/g,"");

	queryForHTML = htmlspecialchars(query);
	if (ToLowerSearchWords == 1)
		queryForSearch = query.toLowerCase();
	else
		queryForSearch = query;
	queryForSearch = htmlspecialchars(queryForSearch);

	searchWords = queryForSearch.split(" "); 


	if (queryForSearch.indexOf("-") != -1)
		searchWords.sort(sw_compare);

	NumSearchWords = searchWords.length;
	
	if (searchWords[0].length == 0)
		NumSearchWords = 0;		
		
	kw_ptr = 0;
	outputline = 0;
	ipage = 0;
	matches = 0;
	pagesCount = NumPages;

	exclude_count = 0;
	ExcludeTerm = 0;


	res_table = new Array(pagesCount);
	for (i = 0; i < pagesCount; i++)
	{
		res_table[i] = new Array(4);
		res_table[i][0] = 0;
		res_table[i][1] = 0;
		res_table[i][2] = 0;
		res_table[i][3] = 0;
	}

	UseWildCards = new Array(NumSearchWords);

	for (sw = 0; sw < NumSearchWords; sw++) {

		UseWildCards[sw] = 0;

		if (typeof(window['skipwords']) != "undefined" ) {
	
			if (searchWords[sw].length < MinWordLen) {
				SkipSearchWord(sw);
				continue;
			}

			for (i = 0; i < skipwords.length; i++) {
				if (searchWords[sw] == skipwords[i])
				{
					SkipSearchWord(sw);
					break;
				}
			}
		}

		if (searchWords[sw].indexOf("*") == -1 && searchWords[sw].indexOf("?") == -1) {
			UseWildCards[sw] = 0;
		} else {
			UseWildCards[sw] = 1;
			RegExpSearchWords[sw] = pattern2regexp(searchWords[sw]);
		}

		if (Highlighting == 1 && UseWildCards[sw] == 0)
			RegExpSearchWords[sw] = searchWords[sw];
	}
	

	if (DictArrayCount > 0)
	{
		for (dci = 0; dci < DictArrayCount; dci++)
			eval("dictwords = dictwords.concat(dictwords"+dci+");");
	}
	if (PageInfoArrayCount > 0)
	{
		for (dci = 0; dci < PageInfoArrayCount; dci++)
			eval("pageinfo = pageinfo.concat(pageinfo"+dci+");");
	}
	if (PageDataArrayCount > 0)
	{
		for (dci = 0; dci < PageDataArrayCount; dci++)
			eval("pagedata = pagedata.concat(pagedata"+dci+");");
	}

	if (DictArrayCount > 0)
	{
		for (dci = 0; dci < DictArrayCount; dci++)
			dictwords = dictwords.concat(window["dictwords"+dci]);
	}
	if (PageInfoArrayCount > 0)
	{
		for (dci = 0; dci < PageInfoArrayCount; dci++)
			pageinfo = pageinfo.concat(window["pageinfo"+dci]);
	}
	if (PageDataArrayCount > 0)
	{
		for (dci = 0; dci < PageDataArrayCount; dci++)
			pagedata = pagedata.concat(window["pagedata"+dci]);
	}


	for (sw = 0; sw < NumSearchWords; sw++) {

		if (searchWords[sw] == "") {
			continue;
		}

		if (searchWords[sw].charAt(0) == '-')
		{
			searchWords[sw] = searchWords[sw].substr(1);
			ExcludeTerm = 1;
			exclude_count++;
		}

		if (UseWildCards[sw] == 1) {
			if (SearchAsSubstring == 0)
				pattern = "^" + RegExpSearchWords[sw] + "$";
			else
				pattern = RegExpSearchWords[sw];
			re = new RegExp(pattern, "g");
		}

		for (kw_ptr = 0; kw_ptr < dictwords.length; kw_ptr++) {

			data = dictwords[kw_ptr].split(" ");

			if (UseWildCards[sw] == 0) {
				if (SearchAsSubstring == 0)
					match_result = wordcasecmp(data[0], searchWords[sw]);
				else
					match_result = data[0].indexOf(searchWords[sw]);
			} else
				match_result = data[0].search(re);


			if (match_result != -1) {

				for (kw = 1; kw < data.length; kw += 3) {
	
					pageexists = 0;
					ipage = data[kw];
					score = parseInt(data[kw+1]);
					prox = parseInt(data[kw+2]);

					if (pageinfo[ipage][PAGEINFO_BOOST] != 0)
					{
						score *= (pageinfo[ipage][PAGEINFO_BOOST] / 10);
						score = Math.floor(score + 0.5);
					}

					if (ExcludeTerm == 1)
					{

						res_table[ipage][0] = 0;
					}
					else if (res_table[ipage][0] == 0)
					{
						matches++;
						res_table[ipage][0] = score;
						res_table[ipage][3] = prox;
					}
					else
					{
						if (res_table[ipage][0] > 10000) {

							res_table[ipage][0] += 1;
						} else {
							res_table[ipage][0] += score; 

						}
						res_table[ipage][3] &= prox;
					}
					res_table[ipage][1] += 1;
	
					if (res_table[ipage][2] == sw || res_table[ipage][2] == sw-SkippedWords-exclude_count)
						res_table[ipage][2] += 1;

				}
				if (UseWildCards[sw] == 0 && SearchAsSubstring == 0)
					break;    
			}
		}
	}

	
	oline = 0;
	fullmatches = 0;
	output = new Array();

	if (UseCats == 1 && DisplayCatSummary == 1)
	{
		if (cat[0] == -1 || num_prueba > 1)
		{
			for (cati = 0; cati < NumCats; cati++)
				CatCounter[cati] = 0;
		}
		else
			DisplayCatSummary = 0;
	}

	var IsAnyDropdown = false;
	var full_numwords = NumSearchWords - SkippedWords - exclude_count;
	for (i = 0; i < pageinfo.length; i++)
	{
		IsFiltered = false;
		if (res_table[i][0] > 0 || IsEmptyMetaQuery)
		{
			if (UseMetaFields && IsFiltered == false)
			{
				for (fieldnum = 0; fieldnum < NumMetaFields && !IsFiltered; fieldnum++)
				{
					IsAnyDropdown = false;
					if (metafields[fieldnum][METAFIELD_TYPE] == METAFIELD_TYPE_DROPDOWN ||
						metafields[fieldnum][METAFIELD_TYPE] == METAFIELD_TYPE_MULTI)
					{
						if (meta_query[fieldnum] == -1)
							IsAnyDropdown = true;
					}

					if (meta_query[fieldnum] !== "" && IsAnyDropdown == false)
					{
						if (GetMetaValues(i, fieldnum) == null)
							IsFiltered = true;
						else if (metafields[fieldnum][METAFIELD_TYPE] == METAFIELD_TYPE_TEXT)
						{
							if (metafields[fieldnum][METAFIELD_METHOD] == METAFIELD_METHOD_SUBSTRING)
							{															
								if (GetMetaValues(i, fieldnum).toLowerCase().indexOf(meta_query[fieldnum].toLowerCase()) == -1)
									IsFiltered = true;
							}
							else
							{
								if (wordcasecmp(GetMetaValues(i, fieldnum).toLowerCase(), meta_query[fieldnum].toLowerCase()) == -1)
									IsFiltered = true;
							}
						}						
						else if (metafields[fieldnum][METAFIELD_TYPE] == METAFIELD_TYPE_DROPDOWN)
						{
							if (GetMetaValues(i, fieldnum) != meta_query[fieldnum])
								IsFiltered = true;
						}
						else if (metafields[fieldnum][METAFIELD_TYPE] == METAFIELD_TYPE_MULTI)
						{
							IsFiltered = true;
							var metaVal = GetMetaValues(i, fieldnum);
							if (metaVal.length > 0)
							{
								for (mqi = 0; mqi < meta_query[fieldnum].length && IsFiltered; mqi++)
								{
									for (mvi = 0; mvi < metaVal.length; mvi++)
									{
										if (metaVal[mvi] == meta_query[fieldnum][mqi])
										{
											IsFiltered = false;
											break;
										}
									}
								}
							}
						}
						else
						{
							var tmpQueryVal = meta_query[fieldnum];

						
							if (UseMetaFields == 1 && MetaMoneyShowDec == 1 && metafields[fieldnum][METAFIELD_TYPE] == METAFIELD_TYPE_MONEY)
								tmpQueryVal = tmpQueryVal * 100;


							if (metafields[fieldnum][METAFIELD_METHOD] == METAFIELD_METHOD_LESSTHAN)
							{
								bRet = GetMetaValues(i, fieldnum) < tmpQueryVal;
							}
							else if (metafields[fieldnum][METAFIELD_METHOD] == METAFIELD_METHOD_LESSTHANORE)
							{
								bRet = GetMetaValues(i, fieldnum) <= tmpQueryVal;
							}
							else if (metafields[fieldnum][METAFIELD_METHOD] == METAFIELD_METHOD_GREATERTHAN)
							{
								bRet = GetMetaValues(i, fieldnum) > tmpQueryVal;
							}
							else if (metafields[fieldnum][METAFIELD_METHOD] == METAFIELD_METHOD_GREATERTHANORE)
							{
								bRet = GetMetaValues(i, fieldnum) >= tmpQueryVal;
							}
							else
							{
								
								bRet = GetMetaValues(i, fieldnum) == tmpQueryVal;
							}

							if (bRet == false)
								IsFiltered = true;
						}
					}
				}
			
				if (IsEmptyMetaQuery == true && IsFiltered == false)
				{
					res_table[i][0]++;
					res_table[i][1]++;
				}
			}
			if (IsFiltered == false) {
				if (res_table[i][2] < full_numwords && andq == 1)
					IsFiltered = true;
			}
			
			if (UseCats && cat[0] != -1 && IsFiltered == false) {
			
				if (SearchMultiCats) {
					var bFoundCat = false;
					for (cati = 0; cati < num_prueba; cati++) {
						if (pageinfo[i][PAGEINFO_CAT].charAt(cat[cati]) == "1")
						{
							if (DisplayCatSummary == 1)
							{
								CatCounter[cat[cati]]++;
								CatCounterFilled = 1;
							}
							bFoundCat = true;
						}
					}
					if (bFoundCat == false)
						IsFiltered = true;
				}
				else {
					if (pageinfo[i][PAGEINFO_CAT].charAt(cat[0]) == "0") {
						IsFiltered = true;
					}
				}
			}
			
			if (IsFiltered == false) {
				
				if (res_table[i][2] >= full_numwords)
					fullmatches++;
				
				output[oline] = new Array(3);
				output[oline][0] = i;

				
				baseScale = 1.3;
				finalScale = ((res_table[i][3] / 255) * 1.7) + baseScale;
				if (res_table[i][1] > 1)
				{
					if (res_table[i][1] <= 10)
						finalScale = Math.pow(finalScale, res_table[i][1]-1);
					else
					{
						finalScale = Math.pow(finalScale, 10);
						finalScale += res_table[i][1] - 10;
					}
				}

				if (UseCats == 1 && DisplayCatSummary == 1 && cat[0] == -1)
				{
				
					if (pageinfo[i][PAGEINFO_CAT] != null)
					{
						for (cati = 0; cati < NumCats; cati++)
						{
							if (pageinfo[i][PAGEINFO_CAT].charAt(cati) == "1")
							{
								CatCounter[cati]++;
								CatCounterFilled = 1;
							}
						}
					}
				}

				output[oline][1] = Math.floor(res_table[i][0] * finalScale + 0.5);
				output[oline][2] = res_table[i][1];
				oline++;
			}
		}
	}
	matches = oline;

	
	if (matches > 1)
	{
		if (sort == 1 && UseDateTime == 1)
			output.sort(SortByDate);    
		else
			output.sort(SortCompare);   
	}

	if (UseUTF8 == 1 && self.encodeURIComponent)
	{
		queryForURL = encodeURIComponent(query);		
		queryForURL = queryForURL.replace(/%20/g, "+");
	}
	else
	{	
		queryForURL = query.replace(/\s/g, "+");	
		queryForURL = escape(queryForURL);
	}

	metaParams = "";
	if (UseMetaFields == 1)
	{
		for (fieldnum = 0; fieldnum < NumMetaFields; fieldnum++)
		{
			if (meta_query[fieldnum] != "")
				metaParams = metaParams+"&amp;"+metafields[fieldnum][METAFIELD_NAME]+"="+meta_query[fieldnum];
		}
	}

	if (Timing == 1)
	{
		timeEnd = new Date();
		timeDifference = timeEnd - timeStart;
	}


	num_pages = Math.ceil(matches / per_page);
}



function ShowResultsPerPage()
{
	document.writeln("<span class=\"resultados\">" + STR_FORM_RESULTS_PER_PAGE + "\n");
	document.writeln("<select name=\"s-page\">");
	for (i = 0; i < PerPageOptions.length; i++)
	{
		document.write("<option");
		if (PerPageOptions[i] == per_page)
			document.write(" selected=\"selected\"");
		document.writeln(">" + PerPageOptions[i] + "</option>");
	}
	document.writeln("</select><br /><br /></span>");
}


function ShowHeading()
{
	if (InitSearchCalled == false)
	{
		if (IsWarningGiven == false)
			document.writeln("<div class=\"results\">This is an advanced template option. You must call InitSearch() before this. Please check documentation for more help.</div>");
		IsWarningGiven = true;
		return;
	}
	if (IsNoSearch)
		return;


	document.write("<div class=\"searchheading\">" + STR_RESULTS_FOR + " " + queryForHTML);
	if (UseCats) {
		if (cat[0] == -1)
		{
			document.writeln(" " + STR_RESULTS_IN_ALL_CATEGORIES);
			query_prueba = "&amp;vvv%5B%5D=-1";
		}
		else
		{
			document.writeln(" " + STR_RESULTS_IN_CATEGORY + " ");
			for (catit = 0; catit < num_prueba; catit++)
			{
				if (catit > 0)
					document.write(", ");
				document.write("\"" + catnames[cat[catit]] + "\"");
				query_prueba += "&amp;vvv%5B%5D="+cat[catit];
			}
		}
	}
	document.writeln("<br /><br /></div>");
}

function ShowResults()
{
	if (InitSearchCalled == false)
	{
		if (IsWarningGiven == false)
			document.writeln("<div class=\"results\">This is an advanced template option. You must call InitSearch() before this. Please check documentation for more help.</div>");
		IsWarningGiven = true;
		return;
	}
	if (IsNoSearch)
	{
		
	}

	document.writeln("<div class=\"results\">");

	if (page == 1) {
		arrayline = 0;
	} else {
		arrayline = ((page - 1) * per_page);
	}


	result_limit = arrayline + per_page;

	while (arrayline < matches && arrayline < result_limit) {
		ipage = output[arrayline][0];
		score = output[arrayline][1];

		pgurl = pagedata[ipage][PAGEDATA_URL];
		pgtitle = pagedata[ipage][PAGEDATA_TITLE];
		pgdesc = pagedata[ipage][PAGEDATA_DESC];
		pgimage = pagedata[ipage][PAGEDATA_IMG];

		urlLink = pgurl;
		if (GotoHighlight == 1)
		{
			if (SearchAsSubstring == 1)
				urlLink = AddParamToURL(urlLink, "luzsub=" + queryForURL);
			else
				urlLink = AddParamToURL(urlLink, "luz=" + queryForURL);
		}
		if (PdfHighlight == 1)
		{
			if (urlLink.toLowerCase().indexOf(".pdf") != -1)
				urlLink = urlLink+"#search=&quot;"+query+"&quot;";
		}

		if (arrayline % 2 == 0)
			document.writeln("<div class=\"result_block\">");
		else
			document.writeln("<div class=\"result_altblock\">");

		if (pageinfo[ipage][PAGEINFO_LINKACTION] == 1)
			target = " target=\"_blank\"";
		else
			target = objetivo;

		if (UseZoomImage == 1)
		{
			if (pgimage.length > 1)
			{
				document.writeln("<div class=\"result_image\">");
				document.writeln("<a href=\"" + urlLink + "\"" + target + "><img src=\"" + pgimage + "\" alt=\"\" class=\"result_image\" /></a>");
				document.writeln("</div>");
			}
		}

		document.writeln("<div class=\"result_title\">");
		if (DisplayNumber == 1)
			document.writeln("<b>" + (arrayline+1) + ".</b>&nbsp;");

		if (DisplayTitle == 1)
		{
			document.writeln("<a href=\"" + urlLink + "\"" + target + ">");
			PrintHighlightDescription(pgtitle);
			document.writeln("</a>");
		}
		else
			document.writeln("<a href=\"" + urlLink + "\"" + target + ">" + pgurl + "</a>");

		if (UseCats)
		{
			catpage = pageinfo[ipage][PAGEINFO_CAT];
			document.write("<span class=\"category\">");
			for (cati = 0; cati < NumCats; cati++)
			{
				if (catpage.charAt(cati) == "1")
					document.write(" ["+catnames[cati]+"]");
			}
			document.writeln("</span>");
		}
		document.writeln("</div>");

		if (UseMetaFields == 1 && DisplayMetaFields == 1)
		{
			var cssFieldName, cssValueName;
			for (fieldnum = 0; fieldnum < NumMetaFields; fieldnum++)
			{
				cssFieldName = "result_metaname_" + metafields[fieldnum][METAFIELD_NAME];
				cssValueName = "result_metavalue_" + metafields[fieldnum][METAFIELD_NAME];
				if (GetMetaValues(ipage, fieldnum) != null)
				{
					if (metafields[fieldnum][METAFIELD_TYPE] == METAFIELD_TYPE_DROPDOWN)
					{
						document.writeln("<div class =\"result_custommeta\">");
						document.writeln("<span class=\""+cssFieldName+"\">"+metafields[fieldnum][METAFIELD_SHOW]+": </span>");
						document.write("<span class=\""+cssValueName+"\">");
						var ddi = GetMetaValues(ipage, fieldnum);
						document.writeln(metafields[fieldnum][METAFIELD_DROPDOWN][ddi]+"</span></div>");
					}
					else if (metafields[fieldnum][METAFIELD_TYPE] == METAFIELD_TYPE_MULTI)
					{
						var metaVal = GetMetaValues(ipage,fieldnum);
						if (metaVal.length > 0)
						{
							document.writeln("<div class =\"result_custommeta\">");
							document.writeln("<span class=\""+cssFieldName+"\">"+metafields[fieldnum][METAFIELD_SHOW]+": </span>");
							document.write("<span class=\""+cssValueName+"\">");
							var ddarray = metafields[fieldnum][METAFIELD_DROPDOWN];
							for (mvi = 0; mvi < metaVal.length; mvi++)
							{
								if (mvi > 0)
									document.write(", ");
								document.write(ddarray[metaVal[mvi]]);
							}
							document.write("</span></div>");
						}
					}
					else if (metafields[fieldnum][METAFIELD_TYPE] == METAFIELD_TYPE_MONEY)
					{
						document.writeln("<div class =\"result_custommeta\">");
						document.writeln("<span class=\""+cssFieldName+"\">"+metafields[fieldnum][METAFIELD_SHOW]+": </span>");
						var tmpMoneyStr = "";
						if (MetaMoneyShowDec == 1)
							tmpMoneyStr = (GetMetaValues(ipage, fieldnum)/100).toFixed(2);
						else
							tmpMoneyStr = GetMetaValues(ipage, fieldnum);
						document.writeln("<span class=\""+cssValueName+"\">"+MetaMoneyCurrency+tmpMoneyStr+"</span></div>");
					}
					else
					{
						document.writeln("<div class =\"result_custommeta\">");
						document.writeln("<span class=\""+cssFieldName+"\">"+metafields[fieldnum][METAFIELD_SHOW]+": </span>");
						document.writeln("<span class=\""+cssValueName+"\">"+GetMetaValues(ipage, fieldnum)+"</span></div>");
					}
				}
			}
		}

		if (DisplayMetaDesc == 1)
		{
		
			document.writeln("<div class=\"description\">");
			PrintHighlightDescription(pgdesc);
			document.writeln("</div>\n");
		}

		info_str = "";

		if (DisplayTerms == 1)
			info_str += STR_RESULT_TERMS_MATCHED + " " + output[arrayline][2];

		if (DisplayScore == 1) {
			if (info_str.length > 0)
				info_str += "&nbsp; - &nbsp;";
			info_str += STR_RESULT_SCORE + " " + score;
		}

		if (DisplayDate == 1)
		{
			pgdate = pageinfo[ipage][PAGEINFO_DATETIME];
			if (pgdate > 0)
			{
				datetime = new Date(pgdate*1000);
				if (info_str.length > 0)
					info_str += "&nbsp; - &nbsp;";
				info_str += datetime.getDate() + " " + months[datetime.getMonth()] + " " + datetime.getFullYear();
			}
		}

		if (DisplayFilesize == 1)
		{
			filesize = pageinfo[ipage][PAGEINFO_FILESIZE];
			filesize = Math.ceil(filesize / 1024);
			if (filesize < 1)
				filesize = 1;

			if (info_str.length > 0)
				info_str += "&nbsp; - &nbsp;";
			info_str += filesize + "k";
		}

		if (DisplayURL == 1) {
			if (info_str.length > 0)
				info_str += "&nbsp; - &nbsp;";
			if (TruncateShowURL > 0)
			{
				if (pgurl.length > TruncateShowURL)
					pgurl = pgurl.substr(0, TruncateShowURL) + "...";
			}
			info_str += STR_RESULT_URL + " " + pgurl;
		}

		document.writeln("<div class=\"infoline\">");
		document.writeln(info_str);
		document.writeln("</div></div>\n");
		arrayline++;
	}
	document.writeln("</div>"); 
}

function ShowSummary()
{
	if (InitSearchCalled == false)
	{
		if (IsWarningGiven == false)
			document.writeln("<div class=\"results\">This is an advanced template option. You must call InitSearch() before this. Please check documentation for more help.</div>");
		IsWarningGiven = true;
		return;
	}
	if (IsNoSearch)
		return;

	if (SkippedWords > 0)
		document.writeln("<div class=\"summary\">" + STR_SKIPPED_FOLLOWING_WORDS + " " + SkippedOutputStr + ".<br /><br /></div>");


	document.writeln("<div class=\"summary\">");
	if (matches == 0)
		document.writeln(STR_SUMMARY_NO_RESULTS_FOUND + "<br />");
	else if (NumSearchWords > 1 && andq == 0) {
		
		SomeTermMatches = matches - fullmatches;
		document.writeln(PrintNumResults(fullmatches) + " " + STR_SUMMARY_FOUND_CONTAINING_ALL_TERMS + " ");
		if (SomeTermMatches > 0)
			document.writeln(PrintNumResults(SomeTermMatches) + " " + STR_SUMMARY_FOUND_CONTAINING_SOME_TERMS);
		document.writeln("<br />");
	}
	else if (NumSearchWords > 1 && andq == 1) 
		document.writeln(PrintNumResults(fullmatches) + " " + STR_SUMMARY_FOUND_CONTAINING_ALL_TERMS + "<br />");
	else
		document.writeln(PrintNumResults(matches) + " " + STR_SUMMARY_FOUND + "<br />");

	document.writeln("</div>\n");
}

function ShowCatSummary()
{
	if (UseCats == 0 || DisplayCatSummary == 0 || CatCounterFilled == 0)
		return;

	if (InitSearchCalled == false)
	{
		if (IsWarningGiven == false)
			document.writeln("<div class=\"results\">This is an advanced template option. You must call InitSearch() before this. Please check documentation for more help.</div>");
		IsWarningGiven = true;
		return;
	}
	if (IsNoSearch)
		return;

	var ShowCatSummaryHeading = true;
	var CatSummaryShown = false;
	for (catit = 0; catit < NumCats; catit++)
	{
		if (CatCounter[catit] > 0)
		{

			if (CatCounter[catit] != matches)
			{
				if (ShowCatSummaryHeading == true)
				{
					document.writeln("<div class=\"cat_summary\"><br />" + STR_CAT_SUMMARY + "<ul>");				
					ShowCatSummaryHeading = false;
					CatSummaryShown = true;
				}
				document.writeln("<li><a href=\"" + SelfURL + LinkBackJoinChar + "s=" + queryForURL + metaParams + "&amp;vvv%5B%5D=" + catit + "&amp;s-page=" + per_page + "&amp;xy=" + andq + "&amp;salida=" + sort + "\">" + catnames[catit]);
				document.writeln("</a> (" + CatCounter[catit] + ")</li>");
			}
		}
	}
	if (DisplayCatSummary == 1 && CatSummaryShown == true)
		document.writeln("</ul></div>");
}

function ShowPagesCount()
{
	if (InitSearchCalled == false)
	{
		if (IsWarningGiven == false)
			document.writeln("<div class=\"results\">This is an advanced template option. You must call InitSearch() before this. Please check documentation for more help.</div>");
		IsWarningGiven = true;
		return;
	}
	if (IsNoSearch)
		return;

	if (num_pages > 1)
		document.writeln("<div class=\"result_pagescount\"><br />" + num_pages + " " + STR_PAGES_OF_RESULTS + "</div>\n");
}

function RecLinkWordMatch(rec_word, rec_idx)
{
	var bRecLinkFound = false;
	for (sw = 0; sw <= NumSearchWords; sw++)
	{
		if (sw == NumSearchWords)
		{
			match_result = wordcasecmp(rec_word, queryForSearch);
		}
		else
		{
			if (UseWildCards[sw] == 1)
			{
				if (SearchAsSubstring == 0)
					pattern = "^" + RegExpSearchWords[sw] + "$";
				else
					pattern = RegExpSearchWords[sw];
				re = new RegExp(pattern, "g");
				match_result = rec_word.search(re);
			}
			else if (SearchAsSubstring == 0)
			{
				match_result = wordcasecmp(rec_word, searchWords[sw]);
			}
			else
				match_result = rec_word.indexOf(searchWords[sw]);

			if (match_result == -1)
			{
				if (rec_word.indexOf("*") != -1 || rec_word.indexOf("?") != -1)
				{
					var RecWordRegExp = "^" + pattern2regexp(rec_word) + "$";
					re = new RegExp(RecWordRegExp, "g");
					match_result = searchWords[sw].search(re);
				}
			}
		}
		if (match_result != -1)
		{
			bRecLinkFound = true;
			if (num_recs_found == 0)
			{
				document.writeln("<div class=\"recommended\">");
				document.writeln("<div class=\"recommended_heading\">" + STR_RECOMMENDED + "</div>");
			}
			pgurl = pagedata[rec_idx][PAGEDATA_URL];
			pgtitle = pagedata[rec_idx][PAGEDATA_TITLE];
			pgdesc = pagedata[rec_idx][PAGEDATA_DESC];
			pgimage = pagedata[rec_idx][PAGEDATA_IMG];
			urlLink = pgurl;
			if (GotoHighlight == 1)
			{
				if (SearchAsSubstring == 1)
					urlLink = RecLinkAddParamToURL(urlLink, "luzsub=" + queryForURL);
				else
					urlLink = RecLinkAddParamToURL(urlLink, "luz=" + queryForURL);
			}
			if (PdfHighlight == 1)
			{
				if (urlLink.toLowerCase().indexOf(".pdf") != -1)
					urlLink = urlLink+"#search=&quot;"+query+"&quot;";
			}
			document.writeln("<div class=\"recommend_block\">");
			if (UseZoomImage == 1)
			{
				if (pgimage.length > 1)
				{
					document.writeln("<div class=\"recommend_image\">");
					document.writeln("<a href=\"" + urlLink + "\"" + objetivo + "><img src=\"" + pgimage + "\" alt=\"\" class=\"recommend_image\"></a>");
					document.writeln("</div>");
				}
			}
			document.writeln("<div class=\"recommend_title\">");
			document.writeln("<a href=\"" + urlLink + "\"" + objetivo + ">");
			if (pgtitle.length > 1)
				PrintHighlightDescription(pgtitle);
			else
				PrintHighlightDescription(pgurl);
			document.writeln("</a></div>");
			document.writeln("<div class=\"recommend_description\">")
			PrintHighlightDescription(pgdesc);
			document.writeln("</div>");
			document.writeln("<div class=\"recommend_infoline\">" + pgurl + "</div>");
			document.writeln("</div>");
			num_recs_found++;
			break;
		}
	}
	return bRecLinkFound;
}

function ShowRecommended()
{
	if (InitSearchCalled == false)
	{
		if (IsWarningGiven == false)
			document.writeln("<div class=\"results\">This is an advanced template option. You must call InitSearch() before this. Please check documentation for more help.</div>");
		IsWarningGiven = true;
		return;
	}
	if (IsNoSearch)
		return;


	if (Recommended == 1)
	{
		num_recs_found = 0;
		rec_count = recommended.length;
		for (rl = 0; rl < rec_count && num_recs_found < RecommendedMax; rl++)
		{
			sep = recommended[rl].lastIndexOf(" ");
			if (sep > -1)
			{
				rec_word = recommended[rl].slice(0, sep);
				rec_idx = parseInt(recommended[rl].slice(sep));
				if (rec_word.indexOf(",") != -1)
				{
					rec_multiwords = rec_word.split(",");
					for (rlm = 0; rlm < rec_multiwords.length; rlm++)
					{
						if (RecLinkWordMatch(rec_multiwords[rlm], rec_idx))
							break;
					}
				}
				else
					RecLinkWordMatch(rec_word, rec_idx);
			}
		}
		if (num_recs_found > 0)
			document.writeln("</div>");
	}
}

function ShowSorting()
{
	if (InitSearchCalled == false)
	{
		if (IsWarningGiven == false)
			document.writeln("<div class=\"results\">This is an advanced template option. You must call InitSearch() before this. Please check documentation for more help.</div>");
		IsWarningGiven = true;
		return;
	}
	if (IsNoSearch)
		return;


	if (matches > 1)
	{
		if (UseDateTime == 1)
		{
			document.writeln("<div class=\"sorting\">");
			if (sort == 1)
				document.writeln("<a href=\"" + SelfURL + LinkBackJoinChar + "s=" + queryForURL + metaParams + "&amp;s_page=" + page + "&amp;s-page=" + per_page + query_prueba + "&amp;xy=" + andq + "&amp;salida=0\">" + STR_SORTBY_RELEVANCE + "</a> / <b>" + STR_SORTEDBY_DATE + "</b>");
			else
				document.writeln("<b>" + STR_SORTEDBY_RELEVANCE + "</b> / <a href=\"" + SelfURL + LinkBackJoinChar + "s=" + queryForURL + metaParams + "&amp;s_page=" + page + "&amp;s-page=" + per_page + query_prueba + "&amp;xy=" + andq + "&amp;salida=1\">" + STR_SORTBY_DATE + "</a>");
			document.writeln("</div>");
		}
	}
}

function ShowPageNumbers()
{
	if (InitSearchCalled == false)
	{
		if (IsWarningGiven == false)
			document.writeln("<div class=\"results\">This is an advanced template option. You must call InitSearch() before this. Please check documentation for more help.</div>");
		IsWarningGiven = true;
		return;
	}
	if (IsNoSearch)
		return;

	
	if (num_pages > 1)
	{

		start_range = page - 10;
		if (start_range < 1)
			start_range = 1;

	
		end_range = page + 10;
		if (end_range > num_pages)
			end_range = num_pages;

		document.writeln("<div class=\"result_pages\">" + STR_RESULT_PAGES + " ");
		if (page > 1)
			document.writeln("<a href=\"" + SelfURL + LinkBackJoinChar + "s=" + queryForURL + metaParams + "&amp;s_page=" + (page-1) + "&amp;s-page=" + per_page + query_prueba + "&amp;xy=" + andq + "&amp;salida=" + sort + "\">&lt;&lt; " + STR_RESULT_PAGES_PREVIOUS + "</a> ");
		for (i = start_range; i <= end_range; i++)
		{
			if (i == page)
				document.writeln(page + " ");
			else
				document.writeln("<a href=\"" + SelfURL + LinkBackJoinChar + "s=" + queryForURL + metaParams + "&amp;s_page=" + i + "&amp;s-page=" + per_page + query_prueba + "&amp;xy=" + andq + "&amp;salida=" + sort + "\">" + i + "</a> ");
		}
		if (page != num_pages)
			document.writeln("<a href=\"" + SelfURL + LinkBackJoinChar + "s=" + queryForURL + metaParams + "&amp;s_page=" + (page+1) + "&amp;s-page=" + per_page + query_prueba + "&amp;xy=" + andq + "&amp;salida=" + sort + "\">" + STR_RESULT_PAGES_NEXT + " &gt;&gt;</a> ");
		document.writeln("</div>");
	}
	
}

function ShowSearchTime()
{
	if (InitSearchCalled == false)
	{
		if (IsWarningGiven == false)
			document.writeln("<div class=\"results\">This is an advanced template option. You must call InitSearch() before this. Please check documentation for more help.</div>");
		IsWarningGiven = true;
		return;
	}
	if (IsNoSearch)
		return;

	if (Timing == 1)
		document.writeln("<div class=\"searchtime\"><br /><br />" + STR_SEARCH_TOOK + " " + (timeDifference/1000) + " " + STR_SECONDS + ".</div>\n");
}


function Searchxx()
{
	InitSearch();
	ShowHeading();
	ShowSummary();
	ShowPagesCount();
	ShowSorting();
	ShowResults();
	ShowPageNumbers();
}

// Index format
var PAGEDATA_URL = 0;
var PAGEDATA_TITLE = 1;
var PAGEDATA_DESC = 2;
var PAGEDATA_IMG = 3;
var PAGEINFO_DATETIME = 0;
var PAGEINFO_FILESIZE = 1;
var PAGEINFO_BOOST = 2;
var PAGEINFO_LINKACTION = 3;
var PAGEINFO_CAT = 4;
var PAGEINFO_METAFIRST = 5;

var METAFIELD_TYPE = 0;
var METAFIELD_NAME = 1;
var METAFIELD_SHOW = 2;
var METAFIELD_FORM = 3;
var METAFIELD_METHOD = 4;
var METAFIELD_DROPDOWN = 5;

var METAFIELD_TYPE_NUMERIC = 0;
var METAFIELD_TYPE_TEXT = 1;
var METAFIELD_TYPE_DROPDOWN = 2;
var METAFIELD_TYPE_MULTI = 3;
var METAFIELD_TYPE_MONEY = 4;

var METAFIELD_METHOD_EXACT = 0;
var METAFIELD_METHOD_LESSTHAN = 1;
var METAFIELD_METHOD_LESSTHANORE = 2;
var METAFIELD_METHOD_GREATERTHAN = 3;
var METAFIELD_METHOD_GREATERTHANORE = 4;
var METAFIELD_METHOD_SUBSTRING = 5;


var UseUTF8 = 1;
var Charset = "UTF-8";
var UseStemming = 0;
var NoCharset = 0;
var MapAccents = 0;
var MinWordLen = 2;
var Highlighting = 0;
var GotoHighlight = 0;
var PdfHighlight = 1;
var FormFormat = 0;
var Logging = 0;
var LogFileName = "./logs/searchwords.log";
var MaxKeyWordLineLen = 256;
var OutputBasewordBufferSize = 88693;
var OutputVariantBufferSize = 80825;
var DictIDLen = 3;
var NumKeywords = 9200;
var NumVariants = 3240;
var NumPages = 341;
var DictArrayCount = 0;
var PageInfoArrayCount = 0;
var PageDataArrayCount = 0;
var PageInfoSize = 5831;
var MaxMatches = 1000;
var MaxContextSeeks = 500;
var MaxSearchTime = 30;
var DictReservedLimit = 165;
var DictReservedSuffixes = 83;
var DictReservedPrefixes = 124;
var DictReservedNoSpaces = 165;
var WordSplit = 1;
var ZoomInfo = 0;
var Timing = 0;
var DefaultToAnd = 0;
var SearchAsSubstring = 1;
var ToLowerSearchWords = 1;
var StripDiacritics = 0;
var ContextSize = 30;
var MaxContextKeywords = 3;
var WeightProximity = 0;
var AllowExactPhrase = 0;
var UseLinkTarget = 0;
var UseDateTime = 0;
var UseZoomImage = 0;
var WordJoinChars = ".-_'";
var Spelling = 0;
var Recommended = 0;
var NumRecommended = 0;
var RecommendedMax = 0;
var UseCats = 0;
var UseMetaFields = 0;
var NumMetaFields = 0;
var DisplayMetaFields = 0;
var TruncateShowURL = 0;
var DisplayNumber = 1;
var DisplayTitle = 1;
var DisplayMetaDesc = 1;
var DisplayContext = 0;
var DisplayTerms = 1;
var DisplayScore = 0;
var DisplayURL = 1;
var DisplayDate = 0;
var DisplayFilesize = 0;
var StartPtFailed = 0;
var PerPageOptions = new Array(10, 20, 40, 100);

var SkippedWords = 0;
var searchWords = new Array();
var RegExpSearchWords = new Array();
var SkippedOutputStr = "";
var CatCounter = new Array();
var CatCounterFilled = 0;

var months = new Array('Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic');

