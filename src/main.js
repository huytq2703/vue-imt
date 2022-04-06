import 'primevue/resources/primevue.min.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'prismjs/themes/prism-coy.css';
import './assets/styles/layout.scss';
import './assets/demo/flags/flags.css';

import { createApp, reactive } from 'vue';
import router from './router/index';
import AppWrapper from './AppWrapper.vue';
import PrimeVue from 'primevue/config';
import AutoComplete from 'primevue/autocomplete';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';
import Badge from 'primevue/badge';
import BadgeDirective from 'primevue/badgedirective';
import Button from 'primevue/button';
import Breadcrumb from 'primevue/breadcrumb';
import Calendar from 'primevue/calendar';
import Card from 'primevue/card';
import Carousel from 'primevue/carousel';
import Chart from 'primevue/chart';
import Checkbox from 'primevue/checkbox';
import Chip from 'primevue/chip';
import Chips from 'primevue/chips';
import ColorPicker from 'primevue/colorpicker';
import Column from 'primevue/column';
import ConfirmDialog from 'primevue/confirmdialog';
import ConfirmPopup from 'primevue/confirmpopup';
import ConfirmationService from 'primevue/confirmationservice';
import ContextMenu from 'primevue/contextmenu';
import DataTable from 'primevue/datatable';
import DataView from 'primevue/dataview';
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions';
import Dialog from 'primevue/dialog';
import Divider from 'primevue/divider';
import Dropdown from 'primevue/dropdown';
import Fieldset from 'primevue/fieldset';
import FileUpload from 'primevue/fileupload';
import Image from 'primevue/image';
import InlineMessage from 'primevue/inlinemessage';
import Inplace from 'primevue/inplace';
import InputMask from 'primevue/inputmask';
import InputNumber from 'primevue/inputnumber';
import InputSwitch from 'primevue/inputswitch';
import InputText from 'primevue/inputtext';
import Knob from 'primevue/knob';
import Galleria from 'primevue/galleria';
import Listbox from 'primevue/listbox';
import MegaMenu from 'primevue/megamenu';
import Menu from 'primevue/menu';
import Menubar from 'primevue/menubar';
import Message from 'primevue/message';
import MultiSelect from 'primevue/multiselect';
import OrderList from 'primevue/orderlist';
import OrganizationChart from 'primevue/organizationchart';
import OverlayPanel from 'primevue/overlaypanel';
import Paginator from 'primevue/paginator';
import Panel from 'primevue/panel';
import PanelMenu from 'primevue/panelmenu';
import Password from 'primevue/password';
import PickList from 'primevue/picklist';
import ProgressBar from 'primevue/progressbar';
import Rating from 'primevue/rating';
import RadioButton from 'primevue/radiobutton';
import Ripple from 'primevue/ripple';
import SelectButton from 'primevue/selectbutton';
import ScrollPanel from 'primevue/scrollpanel';
import ScrollTop from 'primevue/scrolltop';
import Slider from 'primevue/slider';
import Sidebar from 'primevue/sidebar';
import Skeleton from 'primevue/skeleton';
import SplitButton from 'primevue/splitbutton';
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import Steps from 'primevue/steps';
import StyleClass from 'primevue/styleclass';
import TabMenu from 'primevue/tabmenu';
import Tag from 'primevue/tag';
import TieredMenu from 'primevue/tieredmenu';
import Textarea from 'primevue/textarea';
import Timeline from 'primevue/timeline';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Toolbar from 'primevue/toolbar';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Tooltip from 'primevue/tooltip';
import ToggleButton from 'primevue/togglebutton';
import Tree from 'primevue/tree';
import TreeSelect from 'primevue/treeselect';
import TreeTable from 'primevue/treetable';
import TriStateCheckbox from 'primevue/tristatecheckbox';

import CodeHighlight from './AppCodeHighlight';
import BlockViewer from './BlockViewer';
import store from './store';

import {
  isEmpty,
  onlyNumberInput,
  onlyDateInput,
} from './@core/utils/utils';

import {
  formatNumberToLocale,
  formatISOtoVNI,
  formatVniDateToISO,
  formatPrintDate,
} from './@core/utils/filter';

router.beforeEach(function(to, from, next) {
    window.scrollTo(0, 0);
    next();
});

const app = createApp(AppWrapper);

app.config.globalProperties.$appState = reactive({ theme: 'lara-light-indigo', darkTheme: true });

app.use(PrimeVue, { ripple: true, inputStyle: 'outlined' });
app.use(ConfirmationService);
app.use(ToastService);
app.use(router);

app.directive('tooltip', Tooltip);
app.directive('ripple', Ripple);
app.directive('code', CodeHighlight);
app.directive('badge', BadgeDirective);
app.directive('styleclass', StyleClass);

app.component('AccordionComponent', Accordion);
app.component('AccordionTabComponent', AccordionTab);
app.component('AutoCompleteComponent', AutoComplete);
app.component('AvatarComponent', Avatar);
app.component('AvatarGroupComponent', AvatarGroup);
app.component('BadgeComponent', Badge);
app.component('BreadcrumbComponent', Breadcrumb);
app.component('ButtonComponent', Button);
app.component('CalendarComponent', Calendar);
app.component('CardComponent', Card);
app.component('CarouselComponent', Carousel);
app.component('ChartComponent', Chart);
app.component('CheckboxComponent', Checkbox);
app.component('ChipComponent', Chip);
app.component('ChipsComponent', Chips);
app.component('ColorPickerComponent', ColorPicker);
app.component('ColumnComponent', Column);
app.component('ConfirmDialogComponent', ConfirmDialog);
app.component('ConfirmPopupComponent', ConfirmPopup);
app.component('ContextMenuComponent', ContextMenu);
app.component('DataTableComponent', DataTable);
app.component('DataViewComponent', DataView);
app.component('DataViewLayoutOptionsComponent', DataViewLayoutOptions);
app.component('DialogComponent', Dialog);
app.component('DividerComponent', Divider);
app.component('DropdownComponent', Dropdown);
app.component('FieldsetComponent', Fieldset);
app.component('FileUploadComponent', FileUpload);
app.component('ImageComponent', Image);
app.component('InlineMessageComponent', InlineMessage);
app.component('InplaceComponent', Inplace);
app.component('InputMaskComponent', InputMask);
app.component('InputNumberComponent', InputNumber);
app.component('InputSwitchComponent', InputSwitch);
app.component('InputTextComponent', InputText);
app.component('GalleriaComponent', Galleria);
app.component('KnobComponent', Knob);
app.component('ListboxComponent', Listbox);
app.component('MegaMenuComponent', MegaMenu);
app.component('MenuComponent', Menu);
app.component('MenubarComponent', Menubar);
app.component('MessageComponent', Message);
app.component('MultiSelectComponent', MultiSelect);
app.component('OrderListComponent', OrderList);
app.component('OrganizationChart', OrganizationChart);
app.component('OverlayPanel', OverlayPanel);
app.component('PaginatorComponent', Paginator);
app.component('PanelComponent', Panel);
app.component('PanelMenuComponent', PanelMenu);
app.component('PasswordComponent', Password);
app.component('PickListComponent', PickList);
app.component('ProgressBarComponent', ProgressBar);
app.component('RadioButtonComponent', RadioButton);
app.component('RatingComponent', Rating);
app.component('SelectButtonComponent', SelectButton);
app.component('ScrollPanelComponent', ScrollPanel);
app.component('ScrollTopComponent', ScrollTop);
app.component('SliderComponent', Slider);
app.component('SidebarComponent', Sidebar);
app.component('SkeletonComponent', Skeleton);
app.component('SplitButtonComponent', SplitButton);
app.component('SplitterComponent', Splitter);
app.component('SplitterPanelComponent', SplitterPanel);
app.component('StepsComponent', Steps);
app.component('TabMenuComponent', TabMenu);
app.component('TabViewComponent', TabView);
app.component('TabPanelComponent', TabPanel);
app.component('TagComponent', Tag);
app.component('TextareaComponent', Textarea);
app.component('TieredMenuComponent', TieredMenu);
app.component('TimelineComponent', Timeline);
app.component('ToastComponent', Toast);
app.component('ToolbarComponent', Toolbar);
app.component('ToggleButtonComponent', ToggleButton);
app.component('TreeComponent', Tree);
app.component('TreeSelectComponent', TreeSelect);
app.component('TreeTableComponent', TreeTable);
app.component('TriStateCheckboxComponent', TriStateCheckbox);

app.component('BlockViewer', BlockViewer);

app.use(store);

// Feather font icon - For form-wizard
// * Shall remove it if not using font-icons of feather-icons - For form-wizard
require('./@core/assets/fonts/feather/iconfont.css'); // For form-wizard


// import assets styles
require('./assets/styles/style.scss');

// import asset colors
require('./assets/styles/color.scss');

// Add ultils
app.config.globalProperties.$isEmpty = isEmpty;
app.config.globalProperties.$onlyNumberInput = onlyNumberInput;
app.config.globalProperties.$onlyDateInput = onlyDateInput;

// Add filter
app.config.globalProperties.$formatNumberToLocale = formatNumberToLocale;
app.config.globalProperties.$formatISOtoVNI = formatISOtoVNI;
app.config.globalProperties.$formatVniDateToISO = formatVniDateToISO;
app.config.globalProperties.$formatPrintDate = formatPrintDate;

app.mount('#app');