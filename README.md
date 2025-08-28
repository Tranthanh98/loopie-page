# Loopie - Chia sẻ khoảnh khắc với những người thân yêu

> Ứng dụng chụp và chia sẻ hình ảnh nhanh chóng với close friends của bạn

## Giới thiệu

Loopie là một ứng dụng đơn giản và tiện lợi giúp bạn:
- 📸 Chụp ảnh nhanh chóng với giao diện thân thiện
- 👥 Chia sẻ khoảnh khắc đặc biệt với những người bạn thân
- ⚡ Gửi hình ảnh tức thì mà không cần qua nhiều bước phức tạp
- 🔒 Bảo mật và riêng tư - chỉ những người bạn tin tưởng mới có thể xem

## Tính năng chính

- **Chụp ảnh nhanh**: Giao diện camera đơn giản, dễ sử dụng
- **Danh sách bạn thân**: Quản lý danh sách close friends một cách dễ dàng
- **Chia sẻ tức thì**: Gửi ảnh ngay lập tức sau khi chụp
- **Giao diện thân thiện**: Thiết kế hiện đại, responsive trên mọi thiết bị
- **Đa ngôn ngữ**: Hỗ trợ tiếng Việt và tiếng Anh

## Cài đặt và phát triển

Yêu cầu hệ thống:
- Node.js (phiên bản 16 trở lên)
- pnpm (khuyến nghị) hoặc npm

### Bước 1: Clone repository
```bash
git clone <repository-url>
cd loopie-page
```

### Bước 2: Cài đặt dependencies
```bash
pnpm install
# hoặc
npm install
```

### Bước 3: Chạy development server
```bash
pnpm dev
# hoặc
npm run dev
```

Ứng dụng sẽ chạy tại `http://localhost:5173`

## Công nghệ sử dụng

Dự án được xây dựng với các công nghệ hiện đại:

- **Frontend Framework**: React 18 với TypeScript
- **Build Tool**: Vite - build tool nhanh và hiện đại
- **UI Components**: shadcn/ui - thư viện component đẹp và tùy biến cao
- **Styling**: Tailwind CSS - utility-first CSS framework
- **State Management**: React Context API
- **Responsive Design**: Mobile-first approach

## Cấu trúc dự án

```
src/
├── components/          # Các component tái sử dụng
│   ├── ui/             # UI components từ shadcn/ui
│   └── pages/          # Page-specific components
├── pages/              # Các trang chính
├── contexts/           # React Context providers
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── assets/             # Hình ảnh và tài nguyên tĩnh
```

## Scripts có sẵn

```bash
# Chạy development server
pnpm dev

# Build cho production
pnpm build

# Preview build
pnpm preview

# Lint code
pnpm lint
```

## Đóng góp

Chúng tôi hoan nghênh mọi đóng góp! Vui lòng:
1. Fork repository
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Tạo Pull Request

## Liên hệ

Nếu bạn có bất kỳ câu hỏi nào, vui lòng tạo issue hoặc liên hệ với team phát triển.

---

*Được xây dựng với ❤️ cho cộng đồng*
