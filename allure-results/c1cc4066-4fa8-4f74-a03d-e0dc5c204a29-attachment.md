# Page snapshot

```yaml
- dialog "Chỉnh sửa checklist chất xếp":
  - heading "Chỉnh sửa checklist chất xếp" [level=2]
  - text: THÔNG TIN CHI TIẾT Galley code
  - textbox "Galley code": hehe
  - text: Galley items
  - textbox "Galley items": toi la con voi
  - text: Mô tả
  - textbox "Mô tả": 2 con voi
  - heading "Thumbnail" [level=5]
  - img
  - button
  - text: DANH SÁCH
  - table:
    - rowgroup:
      - row "Checklist Ccl PE Ycl Hành động":
        - columnheader "Checklist"
        - columnheader "Ccl"
        - columnheader "PE"
        - columnheader "Ycl"
        - columnheader "Hành động"
    - rowgroup:
      - row "hehe 14 15 18":
        - cell "hehe":
          - paragraph: hehe
        - cell "14":
          - paragraph: "14"
        - cell "15":
          - paragraph: "15"
        - cell "18":
          - paragraph: "18"
        - cell:
          - button
          - button
  - button "Thêm"
  - button "Hủy bỏ"
  - button "Lưu"
```