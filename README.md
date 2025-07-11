# Playwright Automation Project

Dự án này dùng Playwright (https://playwright.dev/) để kiểm thử tự động và generate báo cáo với 
Allure Report (https://docs.qameta.io/allure/)

# Scripts hướng dẫn
---

## 1. Cài đặt ban đầu (sau khi giải nén)

Sau khi giải nén thư mục dự án

### 2. Mở terminal trong VS Code và chạy:

```bash
npm install
npx playwright install

```

## 3. Chạy từng module

## Ghi chú:
- `test:*` là chỉ chạy test không mở báo cáo.
- `run:*` là chạy test và tự generate + mở Allure report.
- `npx playwright test <path-to-spec> --headed` Thêm tùy chọn --headed nếu muốn chạy có giao diện
- `npm run clean` Dọn sạch kết quả test cũ
- `npm run env; allure generate allure-results -o allure-report --clean; allure open` Tạo và mở Allure report thủ công

## chạy 1 login đầu tiên để lưu session  
```bash
npx playwright test project/CbLogin-First.spec.js (--headed)

```
## rồi chạy các module sau

| Module                            | Command                              |
|-----------------------------------|--------------------------------------|
| Setup                             | `npm run run:setup`                  |
| CXB                               | `npm run run:cxb`                    |
| ChecklistGalley - Checklist       | `npm run run:checklist:checklist`    |
| ChecklistGalley - Galley          | `npm run run:checklist:galley`       |
| ChecklistGalley                   | `npm run run:checklist`              |
| List-Flights                      | `npm run run:flights`                |
| Tất cả                            | `npm run run:all`                    |

## Chạy từng file test cụ thể

### cấu hình tàu bay `project/SetUp/`

```bash
npx playwright test project/SetUp/Create-TypeOfAircraft.spec.js
npx playwright test project/SetUp/Delete-TypeOfAircraft.spec.js
npx playwright test project/SetUp/Search-TypeOfAircraft.spec.js
npx playwright test project/SetUp/Update-TypeOfAircraft.spec.js

```

### danh sách sơ đồ galley `project/ChecklistGalley/`

```bash
npx playwright test project/ChecklistGalley/CbCreateCXB-galley.spec.js 
npx playwright test project/ChecklistGalley/CbDeleteCXB-galley.spec.js
npx playwright test project/ChecklistGalley/CbSearchCXB-galley.spec.js
npx playwright test project/ChecklistGalley/CbUpdateCXB-galley.spec.js

```

### chi tiết danh sách sơ đồ galley (checklist)  `project/ChecklistGalley/ClickOne-List-Checklist-Galley/`
```bash
npx playwright test project/ChecklistGalley/ClickOne-List-Checklist-Galley/CbCreateDevice-galley.spec.js
npx playwright test project/ChecklistGalley/ClickOne-List-Checklist-Galley/CbExportDevice-galley.spec.js
npx playwright test project/ChecklistGalley/ClickOne-List-Checklist-Galley/CbSearchDevice-galley.spec.js
npx playwright test project/ChecklistGalley/ClickOne-List-Checklist-Galley/CbUpdateDevice-galley.spec.js
npx playwright test project/ChecklistGalley/ClickOne-List-Checklist-Galley/CbUploadFileCXB-galley.spec.js

```

### chi tiết danh sách sơ đồ galley (Galley) `project/ChecklistGalley/ClickOne-List-Galley/`
```bash
npx playwright test project/ChecklistGalley/ClickOne-List-Galley/CbExport-galley.spec.js
npx playwright test project/ChecklistGalley/ClickOne-List-Galley/CbUpdate-galley.spec.js

```
### danh sách checklist CXB`project/CXB/`
```bash
npx playwright test project/CXB/CbCreateCXB.spec.js
npx playwright test project/CXB/CbDeleteCXB.spec.js
npx playwright test project/CXB/CBSearchCXB.spec.js
npx playwright test project/CXB/CbUpdate.spec.js

```
### danh sách chuyến bay `project/List-Flights/`
```bash
npx playwright test project/List-Flights/CbExport-checklist.spec.js
npx playwright test project/List-Flights/CbExport-galley.spec.js
npx playwright test project/List-Flights/CbSearch.spec.js

```
