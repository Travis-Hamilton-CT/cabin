"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_helmet_async_1 = require("react-helmet-async");
var usehooks_ts_1 = require("usehooks-ts");
var AirlineClassDropdown = function () {
    var Icon = function () {
        return react_1.default.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            react_1.default.createElement("path", { d: "M16.7803 14.305H11.1432C10.3919 14.305 9.78055 13.6617 9.78055 12.871V10.9585H14.6669C14.9489 10.9585 15.1775 10.7179 15.1775 10.4212C15.1775 10.1244 14.9489 9.88385 14.6669 9.88385H9.78055V4.00307C9.78055 1.79578 8.07395 0 5.97629 0H4.51062C4.22861 0 4 0.240555 4 0.537307V17.4406C4 18.9645 5.17827 20.2044 6.62653 20.2044H9.88471L7.46451 22.9254H4.80974C4.52772 22.9254 4.29912 23.166 4.29912 23.4627C4.29912 23.7594 4.52772 24 4.80974 24H15.5681C15.8501 24 16.0787 23.7594 16.0787 23.4627C16.0787 23.166 15.8501 22.9254 15.5681 22.9254H8.86325L11.2835 20.2044H18.2897C19.2328 20.2044 20 19.3971 20 18.4047V17.6929C20 15.8248 18.5557 14.305 16.7803 14.305ZM18.9788 18.4047C18.9788 18.8045 18.6696 19.1298 18.2897 19.1298H6.62653C5.74137 19.1298 5.02124 18.372 5.02124 17.4406V1.07461H5.97629C7.51085 1.07461 8.75931 2.38831 8.75931 4.00307V12.871C8.75931 14.2542 9.82872 15.3796 11.1432 15.3796H16.7803C17.9925 15.3796 18.9788 16.4174 18.9788 17.6929V18.4047V18.4047Z", fill: "#7C8396" }));
    };
    var Icon1 = function () {
        return react_1.default.createElement("svg", { width: "30", height: "30", viewBox: "0 0 30 30", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            react_1.default.createElement("path", { d: "M21.006 17.8812H13.5051C12.5053 17.8812 11.6919 17.0771 11.6919 16.0888V13.6981H18.1939C18.5691 13.6981 18.8733 13.3974 18.8733 13.0265C18.8733 12.6555 18.5691 12.3548 18.1939 12.3548H11.6919V5.00384C11.6919 2.24473 9.42099 0 6.62974 0H4.67945C4.30419 0 4 0.300694 4 0.671634V21.8008C4 23.7057 5.56786 25.2555 7.49498 25.2555H11.8305L8.61003 28.6567H5.07748C4.70221 28.6567 4.39802 28.9575 4.39802 29.3284C4.39802 29.6993 4.70221 30 5.07748 30H19.393C19.7683 30 20.0725 29.6993 20.0725 29.3284C20.0725 28.9575 19.7683 28.6567 19.393 28.6567H10.4713L13.6917 25.2555H23.0145C24.2694 25.2555 25.2903 24.2463 25.2903 23.0059V22.1162C25.2903 19.781 23.3684 17.8812 21.006 17.8812ZM23.9314 23.0059C23.9314 23.5056 23.5201 23.9122 23.0145 23.9122H7.49498C6.31715 23.9122 5.35891 22.965 5.35891 21.8008V1.34327H6.62974C8.6717 1.34327 10.333 2.98539 10.333 5.00384V16.0888C10.333 17.8178 11.756 19.2245 13.5051 19.2245H21.006C22.6191 19.2245 23.9314 20.5217 23.9314 22.1162V23.0059V23.0059Z", fill: "#7C8396" }));
    };
    var Icon3 = function () {
        return react_1.default.createElement("svg", { width: "30", height: "30", viewBox: "0 0 30 30", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            react_1.default.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M24.3035 24.2108L27.8184 24.3327C28.1834 24.3454 28.4692 24.6562 28.4568 25.0269C28.4445 25.3898 28.151 25.6756 27.7962 25.6756C27.7885 25.6756 27.7809 25.6755 27.7732 25.6752L24.2052 25.5514C24.157 25.5625 24.1079 25.5686 24.0586 25.5686C23.8972 25.5686 23.7355 25.509 23.6081 25.3885L21.6579 23.5443C21.4197 24.5254 20.5462 25.2552 19.5076 25.2552H10.4335L7.2987 28.6567H15.9826C16.3478 28.6567 16.6439 28.9575 16.6439 29.3284C16.6439 29.6993 16.3478 30 15.9826 30H2.04873C1.68346 30 1.38739 29.6993 1.38739 29.3284C1.38739 28.9575 1.68346 28.6567 2.04873 28.6567H5.48708L8.62187 25.2552H4.40193C2.5261 25.2552 1 23.7057 1 21.801V0.671628C1 0.300691 1.2961 0 1.66134 0H3.55938C6.27648 0 8.48703 2.2449 8.48703 5.00428V10.6446H14.1296C15.2064 10.6446 16.0825 11.5343 16.0825 12.628C16.0825 13.1574 15.8794 13.6552 15.5105 14.0297C15.1429 14.4041 14.6523 14.6106 14.1296 14.6106H8.48703V16.0888C8.48703 17.0773 9.27854 17.8814 10.2515 17.8814H17.5527C19.7319 17.8814 21.5249 19.5883 21.7062 21.7546L24.3035 24.2108ZM14.7598 12.628C14.7598 12.275 14.4772 11.9879 14.1296 11.9879H8.48703V13.2673H14.1296C14.2983 13.2673 14.4563 13.201 14.5746 13.0805C14.6943 12.959 14.7598 12.7985 14.7598 12.628ZM19.5076 23.912C19.9995 23.912 20.3998 23.5055 20.3998 23.006V22.116C20.3998 20.5218 19.1225 19.2247 17.5527 19.2247H10.2515C8.54922 19.2247 7.16435 17.818 7.16435 16.0888V13.939V11.3162V5.00428C7.16435 2.9856 5.54716 1.34326 3.55938 1.34326H2.32268V21.801C2.32268 22.965 3.25544 23.912 4.40193 23.912H19.5076ZM21.9696 13.0434H19.3663C17.7815 13.0434 16.4922 11.734 16.4922 10.1246V4.78409C16.4922 3.17461 17.7815 1.86523 19.3663 1.86523H21.9696C23.4105 1.86523 24.6069 2.94775 24.8123 4.354L24.8138 4.36626C24.8332 4.5028 24.8437 4.6422 24.8437 4.78409V8.62314V8.62336V10.1246C24.8437 11.734 23.5544 13.0434 21.9696 13.0434ZM23.5211 5.78268L17.8151 10.1353C17.8197 10.8325 18.2725 11.4235 18.895 11.6256L23.5211 8.29233V5.78268ZM21.0773 11.7001H21.9696C22.8251 11.7001 23.5211 10.9933 23.5211 10.1246V9.93931L21.0773 11.7001ZM21.9696 3.20849H19.3663C18.5108 3.20849 17.8149 3.91531 17.8149 4.78409V8.45548L23.4063 4.19024C23.1749 3.61503 22.6183 3.20849 21.9696 3.20849Z", fill: "#7C8396" }));
    };
    var Arrow = function () {
        return react_1.default.createElement("svg", { width: "21", height: "22", viewBox: "0 0 21 22", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            react_1.default.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M16.6095 7.37277C16.0888 6.87574 15.2446 6.87574 14.7239 7.37277L11 10.9274L7.27614 7.37277C6.75544 6.87574 5.91122 6.87574 5.39052 7.37277C4.86982 7.8698 4.86982 8.67565 5.39052 9.17268L10.0572 13.6272C10.5779 14.1243 11.4221 14.1243 11.9428 13.6272L16.6095 9.17268C17.1302 8.67565 17.1302 7.8698 16.6095 7.37277Z", fill: "#7C8396" }));
    };
    var classesData = [
        { name: "All Classes", icon: Icon1, checkBool: true },
        { name: "Economy Class", icon: Icon1, checkBool: false },
        { name: "Business Class", icon: Icon3, checkBool: false },
        { name: "First Class", icon: Icon3, checkBool: false },
    ];
    var _a = react_1.useState(classesData), data = _a[0], setData = _a[1];
    var _b = react_1.useState(false), showDropdownClasses = _b[0], setDrpoDownClasses = _b[1];
    var _c = react_1.useState("Economy"), cabinClass = _c[0], setCabinClass = _c[1];
    var handleCheck = function (item) {
        console.log("item -->", item.name);
        setCabinClass(item.name);
        setData(data.map(function (x) {
            if (x.name == item.name)
                return __assign(__assign({}, x), { checkBool: true });
            return __assign(__assign({}, x), { checkBool: false });
        }));
    };
    var status = usehooks_ts_1.useScript('https://cdn.tailwindcss.com', {
        removeOnUnmount: false,
    });
    react_1.useEffect(function () {
        if (status === 'ready') {
            var script = document.createElement("script");
            script.innerHTML = "\n                tailwind.config = {\n                    theme: {\n                        extend: {\n                            fontFamily: {\n                                quicksand: \"Quicksand\",\n                                \"plus-jakarta-sans\": \"'Plus Jakarta Sans'\",\n                            },\n                        },\n                        colors: {\n                            white: \"#fff\",\n                            gray: {\n                                100: \"#E6E8EC\",\n                                200: \"#e6e8ec\",\n                                300: \"#b9bdc6\",\n                                400: \"#7c8396\",\n                                500: \"#777e90\",\n                                600: \"#23262f\",\n                                700: \"#151e34\",\n                            },\n                            violet: { 100: \"#EB1F8F\", 200: \"#eb1f8f\" },\n                            black: \"#000\",\n                        },\n                        fontSize: {\n                            \"6xs\": \"4.68px\",\n                            \"5xs\": \"10px\",\n                            \"4xs\": \"11px\",\n                            \"3xs\": \"12px\",\n                            \"2xs\": \"12.29px\",\n                            xs: \"13px\",\n                            sm: \"13.82px\",\n                            base: \"14px\",\n                            lg: \"15px\",\n                            xl: \"16px\",\n                            \"2xl\": \"17px\",\n                            \"3xl\": \"18px\",\n                            \"4xl\": \"19px\",\n                            \"5xl\": \"20px\",\n                            \"6xl\": \"22px\",\n                            \"7xl\": \"24px\",\n                            \"8xl\": \"26px\",\n                            \"9xl\": \"30px\",\n                            \"10xl\": \"35px\",\n                            \"11xl\": \"40px\",\n                            \"12xl\": \"44px\",\n                            \"13xl\": \"48px\",\n                        },\n                        screens: {\n                            lg: { max: \"1200px\" },\n                            md: { max: \"992px\" },\n                            sm: { max: \"768px\" },\n                            mq350small: { raw: \"screen and (max-width: 550px)\" },\n                            xs: { raw: \"screen and (max-width: 401px)\" },\n                        },\n                    }\n                }\n            ";
            script.async = true;
            document.head.appendChild(script);
        }
    }, [status]);
    if (status === 'ready') {
        return (react_1.default.createElement(react_helmet_async_1.HelmetProvider, null,
            react_1.default.createElement(react_helmet_async_1.Helmet, null,
                react_1.default.createElement("title", null, "Copilot Travel"),
                react_1.default.createElement("meta", { name: "viewport", content: "minimum-scale=1, initial-scale=1, width=device-width" }),
                react_1.default.createElement("link", { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;700&display=swap" }),
                react_1.default.createElement("link", { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Quicksand:wght@700&display=swap" }),
                react_1.default.createElement("link", { href: "https://fonts.googleapis.com/css2?family=Poppins:ital@0;1&display=swap", rel: "stylesheet" })),
            react_1.default.createElement("div", { className: "relative w-full flex flex-col items-center justify-start text-right text-xl text-gray-1900 font-plus-jakarta-sans" },
                react_1.default.createElement("div", { className: "flex flex-row items-center justify-end gap-[12px] z-[0] hover:cursor-pointer", onClick: function () {
                        setDrpoDownClasses(!showDropdownClasses);
                        if (!showDropdownClasses) {
                        }
                    } },
                    react_1.default.createElement(Icon, null),
                    react_1.default.createElement("h5", { className: "m-[0] relative text-[16px] leading-[16px] font-normal font-inherit inline-block" }, cabinClass),
                    react_1.default.createElement(Arrow, null)),
                showDropdownClasses && (react_1.default.createElement("div", { className: "mt-[10px] rounded-[0px_0px_15px_15px] bg-white-200 [border:1px_solid_#e6e8ec] box-border w-[328.04px] flex flex-row p-[24px] items-start justify-start pr-[0px] z-[1] text-left text-2xl" },
                    react_1.default.createElement("div", { className: "flex-1 flex flex-col items-start justify-start gap-[28px]" },
                        data.map(function (item, idx) { return (react_1.default.createElement("div", { key: idx, onClick: function () { return handleCheck(item); }, className: "self-stretch flex flex-row items-center justify-between hover:cursor-pointer" },
                            react_1.default.createElement("div", { className: "flex flex-row items-center justify-start gap-[10px] whitespace-nowrap" },
                                react_1.default.createElement(item.icon, null),
                                react_1.default.createElement("p", { className: "m-[0] relative leading-[16px] inline-block" }, item.name)),
                            react_1.default.createElement("input", { className: "h-[1.15rem] mr-[35px] w-[1.15rem] my-1 accent-violet-200   cursor-pointer", key: Math.random(), type: "checkbox", onChange: function () { return handleCheck(item); }, checked: item.checkBool }))); }),
                        react_1.default.createElement("button", { onClick: function () {
                                setDrpoDownClasses(false);
                            }, className: "cursor-pointer text-black [border:1px_solid_#eb1f8f] p-[12px_16px] bg-[#F0F0F0] self-stretch rounded-[90px] box-border relative flex flex-row items-center justify-center mr-[30px] hover:bg-violet-100 hover:text-white " },
                            react_1.default.createElement("label", { className: "relative text-base leading-[16px] font-bold font-plus-jakarta-sans text-[inherit] text-center inline-block cursor-pointer" }, "Apply"))))))));
    }
    return react_1.default.createElement("div", null, "Loading");
};
exports.default = AirlineClassDropdown;
